import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { ThemeContext, SetThemeContext } from '../../context/themeContext'


function HomeNav() {
	let theme = useContext(ThemeContext)
	let setTheme: Dispatch<SetStateAction<string>> = useContext(SetThemeContext)
	const handleChangeTheme = () => {
		console.log(theme);
		console.log(setTheme);

	}
	return <header className='flex flex-row justify-end text-[20px] p-6'>
		<Link className='ml-5' to="/">home</Link>
		<Link className='ml-5' to="/codeTest">codeTest</Link>
		<Link className='ml-5' to="/game">blog</Link>
		<Link className='ml-5' to="/game">game</Link>
		<Link className='ml-5' to="/demos">demo</Link>
		<a href="https://github.com/junpang-bob" target="_blank" className='ml-5'>
			<svg className="icon" aria-hidden="true">
				<use xlinkHref="#icon-github"></use>
			</svg>
		</a>
		<svg onClick={() => handleChangeTheme()} className="icon ml-5 cursor-pointer" aria-hidden="true">
			<use xlinkHref="#icon-icon-baitianmoshi"></use>
		</svg>
	</header>
}
function HomeView() {
	return (<div className='px-[28px] py-[40px]'>
		<div className='m-auto w-[700px] text-[30px] pb-[20px] font-extrabold'>爱吃咸鱼的树</div>
		<article className='m-auto w-[700px]'>
			<p className='blog-p'>让我们一起快乐的写代码吧，写一些好玩的效果，分享一些有趣的东西！</p>
			<p className='blog-p'>
			</p>
		</article>
	</div>)
}
export default function Home() {
	const href = useLocation()
	const view = href.pathname === '/' ? <HomeView /> : <Outlet />
	const [theme, setTheme] = useState('light')
	// const ThemeContext = createContext(theme)
	// const SetThemeContext = createContext(setTheme)

	return <ThemeContext.Provider value={theme}>
		<SetThemeContext.Provider value={setTheme}>
			<div className=' bg-white dark:bg-slate-800 text-black dark:text-white w-[100vw] h-[100vh] overflow-scroll' id='home'>
				<HomeNav />
				{view}
			</div>
		</SetThemeContext.Provider>
	</ThemeContext.Provider>
}
