import { useEffect, useRef } from 'react';
import { Application, Container, Sprite, Assets } from 'pixi.js';

function PixiComponent() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const initPixi = async () => {
      const app = new Application();
      appRef.current = app;
      await app.init({
        background: '#1099bb',
        width: 400,
        height: 200,
        antialias: true,
        autoDensity: true,
      });
      console.log(1111);

      if (canvasRef.current) {
        const container = new Container({
          width: 120,
          height: 40,
        });
        app.stage.addChild(container);
        const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

        // Create a 5x5 grid of bunnies in the container
        for (let i = 0; i < 25; i++) {
          const bunny = new Sprite(texture);

          bunny.x = (i % 5) * 40;
          bunny.y = Math.floor(i / 5) * 40;
          container.addChild(bunny);
        }

        // Move the container to the center
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;

        // Center the bunny sprites in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;

        // Listen for animate update
        app.ticker.add((time) => {
          // Continuously rotate the container!
          // * use delta to create frame-independent transform *
          container.rotation -= 0.01 * time.deltaTime;
        });
        canvasRef.current.appendChild(app.canvas as HTMLCanvasElement);
      }
      console.log(app);
    };

    initPixi();

    // return () => {
    //   if (appRef.current) {
    //     appRef.current.destroy(true);
    //   }
    // };
  }, []);

  return <div ref={canvasRef} className="border-2 border-gray-300 rounded-lg shadow-lg" />;
}

export default function PixiTag() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">PixiJS 交互示例</h1>
      <p className="text-gray-600 mb-4">尝试与红色方块交互：悬停、点击</p>
      <PixiComponent />
    </div>
  );
}
