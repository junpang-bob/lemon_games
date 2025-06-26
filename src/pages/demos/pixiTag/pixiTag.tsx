import { Application, Assets, Container, Sprite } from 'pixi.js'
import { useEffect, useRef } from 'react'

function PixiComponent() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<Application | null>(null)

  useEffect(() => {
    let amount = true
    const initPixi = async () => {
      const app = new Application()
      appRef.current = app
      await app.init({
        background: '#1099bb',
        width: 400,
        height: 400,
        antialias: true,
        autoDensity: true,
      })
      console.log(app)

      if (canvasRef.current && amount) {
        const container = new Container()
        app.stage.addChild(container)
        const texture = await Assets.load('https://pixijs.com/assets/bunny.png')
        const snack = new Sprite(texture)
        snack.width = 20
        snack.height = 20
        container.addChild(snack)
        // Create a 5x5 grid of bunnies in the container

        // Listen for animate update
        app.ticker.add(() => {
          container.x += 1
          // Continuously rotate the container!
          // * use delta to create frame-independent transform *
        })
        canvasRef.current.appendChild(app.canvas as HTMLCanvasElement)
      }
    }

    initPixi()

    return () => {
      // console.log(appRef.current?.destroy);
      amount = false
    }
  }, [])

  return <div ref={canvasRef} className="border-2 border-gray-300 rounded-lg shadow-lg" />
}

export default function PixiTag() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">PixiJS 交互示例</h1>
      <p className="text-gray-600 mb-4">尝试与红色方块交互：悬停、点击</p>
      <PixiComponent />
    </div>
  )
}
