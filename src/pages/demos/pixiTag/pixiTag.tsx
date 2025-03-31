import { useEffect, useRef } from 'react';
import { Application } from 'pixi.js';

function PixiComponent() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const app = new Application();
    appRef.current = app;
    app.init({
      background: '#1099bb',
      width: 400,
      height: 200,
      antialias: true,
      autoDensity: true,
    }).then(() => {
      if (canvasRef.current) {
        canvasRef.current.appendChild(app.canvas as HTMLCanvasElement);
      }
    });
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
