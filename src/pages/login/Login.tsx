import { useRef, useEffect, useState } from "react"
import { Input, Button } from 'antd'
interface Point {
    x: number
    y: number
}
interface Branch {
    start: Point
    length: number
    angle: number
}
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
    function lineTo(p1: Point, p2: Point,) {
        if (ctxRef.current) {
            ctxRef.current.beginPath()
            ctxRef.current.moveTo(p1.x, p1.y)
            ctxRef.current.lineTo(p2.x, p2.y)
            ctxRef.current.stroke()
        }
    }

    function getEndPoint(l: Branch) {
        const { start, length, angle } = l
        return {
            x: start.x + length * Math.cos(angle),
            y: start.y + length * Math.sin(angle)
        }
    }
    function drawBranch(l: Branch) {
        const { start } = l
        const end = getEndPoint(l)
        lineTo(start, end)
    }
    const pendingTasks: Function[] = []
    function step(b: Branch, depth = 0) {
        const end = getEndPoint(b)
        drawBranch(b)
        if ((depth < 2 || Math.random() < 0.5) && depth < 15) {
            pendingTasks.push(() => {
                step({
                    start: end,
                    length: b.length + (10 * Math.random() - 5),
                    angle: b.angle - 0.4 * Math.random()
                }, depth + 1)
            })
        }
        if ((depth < 2 || Math.random() < 0.5) && depth < 15) {
            pendingTasks.push(() => {
                step({
                    start: end,
                    length: b.length + (10 * Math.random() - 5),
                    angle: b.angle + 0.4 * Math.random()
                }, depth + 1)
            })
        }
    }
    function frame() {
        const taks = [...pendingTasks]
        pendingTasks.length = 0
        taks.forEach(fn => fn())
    }
    let frameCount = 0
    function startFrame() {
        frameCount += 1
        requestAnimationFrame(() => {
            if (frameCount % 5 === 0) {
                frame()
            }
            startFrame()
        })
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext('2d')
            ctxRef.current = ctx
            if (ctx) {
                ctx.strokeStyle = '#999'
                const branch: Branch = {
                    start: { x: 0, y: 0 },
                    length: 40,
                    angle: Math.PI / 4
                }
                step(branch)
                startFrame()
                const bottomBranch: Branch = {
                    start: { x: window.innerWidth, y: window.innerHeight },
                    length: 40,
                    angle: -Math.PI * 3 / 4
                }
                step(bottomBranch)
                startFrame()
            }
        }
    }, [])

    return (
        <div className="bg-black w-screen h-screen">
            <canvas id="canvas" className="absolute top-0 left-0 w-full h-full" ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl text-white mb-[20px]">只有风暴才能击倒大树</h1>
                <Input value={username} onChange={(e: any) => setUsername(e.target.value)} type="text" placeholder="用户名" className="w-[300px] h-[40px] mb-[20px]" />
                <Input value={password} onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder="密码" className="w-[300px] h-[40px] mb-[20px]" />
                <Button className="w-[300px] h-[40px] bg-blue-500 text-white">登录</Button>
            </div>
        </div>
    )
}
