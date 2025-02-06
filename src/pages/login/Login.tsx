import { Button, Input } from "antd"
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-[20px]">只有风暴才能击倒大树</h1>
        <Input value={username} onChange={(e: any) => setUsername(e.target.value)} type="text" placeholder="用户名" className="w-[300px] h-[40px] mb-[20px]" />
        <Input value={password} onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder="密码" className="w-[300px] h-[40px] mb-[20px]" />
        <Button className="w-[300px] h-[40px] bg-blue-500 text-white">登录</Button>
    </div>
}
