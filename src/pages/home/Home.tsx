import { Link } from 'react-router-dom'
import './Home.scss'

function HomeNav() {
  return <div className='home-nav text-[16px]'>
    <li className='text-center'>blog</li>
    <li className='text-center'>demos</li>
    <Link className='text-center' to="/game">games</Link>
  </div>
}
export default function Home() {
  return <div id='home'>
    <HomeNav />
    <div className='grid justify-center mt-[20px]'>
      <div className='flex mb-[20px] text-[18px]'><span className='mr-[10px]'>Hi！</span><span>这是我的快乐老家</span></div>
      <p className='w-[500px] text-[14px] text-red-100'>因为穷且菜，就在上面做些垃圾看看吧，无聊的时候写写代码</p>
    </div>
  </div>
}
