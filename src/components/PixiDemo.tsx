import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const PixiDemo = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 创建 PixiJS 应用
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });

    // 将 PixiJS 画布添加到 DOM
    canvasRef.current.appendChild(app.view as HTMLCanvasElement);

    // 创建一个矩形
    const rectangle = new PIXI.Graphics();
    rectangle.beginFill(0xff0000);
    rectangle.drawRect(0, 0, 100, 100);
    rectangle.endFill();

    // 设置矩形位置
    rectangle.x = app.screen.width / 2;
    rectangle.y = app.screen.height / 2;

    // 添加矩形到舞台
    app.stage.addChild(rectangle);

    // 动画循环
    app.ticker.add(() => {
      rectangle.rotation += 0.01;
    });

    // 清理函数
    return () => {
      app.destroy(true);
      if (canvasRef.current) {
        canvasRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div ref={canvasRef} className="border-2 border-gray-300 rounded-lg shadow-lg" />
    </div>
  );
};

export default PixiDemo; 
