import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { SetThemeContext, ThemeContext } from '../../context/themeContext'

function HomeNav() {
  return (
    <header className="flex flex-row justify-end pb-[40px] text-[20px]">
      <Link className="ml-5" to="/home">home</Link>
      <Link className="ml-5 " to="/home/codeTest">codeTest</Link>
      <Link className="ml-5" to="/home/blog">blog</Link>
      <Link className="ml-5 hidden" to="/home/game">game</Link>
      <Link className="ml-5" to="/home/demos">demo</Link>
      <a href="https://github.com/junpang-bob" target="_blank" className="ml-5">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-github"></use>
        </svg>
      </a>
    </header>
  )
}
function HomeView() {
  return (
    <div>
      <div className="m-auto w-[700px] text-[30px] pb-[20px]">爱吃咸鱼的树</div>
      <article className="m-auto w-[700px]">
        <p className="blog-p">让我们一起快乐的写代码吧，写一些好玩的效果，分享一些有趣的东西！</p>
        <p className="blog-p">
        </p>
      </article>
    </div>
  )
}
export default function Home() {
  const href = useLocation()
  const view = href.pathname === '/home' ? <HomeView /> : <Outlet />
  const [theme, setTheme] = useState(localStorage.getItem('model'))
  const rootEl = document.querySelector('#root')
  if (theme === 'dark') {
    rootEl?.classList.add(theme)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <div className="text-white px-[28px] py-[40px]  w-[100vw] h-[100vh]  bg-dark-bg overflow-scroll" id="home">
          <HomeNav />
          {view}
        </div>
        7
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
