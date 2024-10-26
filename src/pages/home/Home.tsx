import { Link, Outlet, useLocation } from 'react-router-dom'

function HomeNav() {
	return <header className='flex flex-row justify-end text-[16px] p-[20px]'>
		<Link className='ml-[15px]' to="/">home</Link>
		<Link className='ml-[15px]' to="/game">blog</Link>
		<Link className='ml-[15px]' to="/game">games</Link>
		<Link className='ml-[15px]' to="/demos">demos</Link>
	</header>
}
function HomeView() {
	return (<div className='px-[28px] py-[40px]'>
		<div className='m-auto w-[700px] text-[30px] pb-[20px] font-extrabold'>爱吃咸鱼的树</div>
		<article className='m-auto w-[700px]'>
			<p className='blog-p'>来写一些代码吧！可能会写一些好看的特效效果，一些有趣的库，分享一些好玩的游戏。
				这不是一个纯技术的博客。希望做一个丰富的人，好好生活，好好工作。</p>
		</article>
	</div>)
}
export default function Home() {
	let href = useLocation()
	const view = href.pathname === '/' ? <HomeView /> : <Outlet />
	return <div id='home'>
		<HomeNav />
		{view}
	</div>
}
