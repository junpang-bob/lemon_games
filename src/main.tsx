import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
	RouterProvider,
	createHashRouter,
	Navigate
} from "react-router-dom";
import './main.css'
import './assets/css/iconfont.css'
import Game from './pages/game/Game';
import XOGame from './pages/game/XOGame/XOGame';
import './assets/css/base.css'
import './assets/css/layout.css'
import BubblesGame from './pages/game/BubblesGame/BubblesGame';
import Home from './pages/home/Home';
import Demos from './pages/demos/Demos';
import Markets from './pages/demos/markets/Markets';


const router = createHashRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: "/game",
				element: <Game />,
				children: [
					{
						path: '',
						element: <Navigate to='/game/xogame'></Navigate>
					},
					{
						path: 'xogame',
						element: <XOGame />
					},
					{
						path: 'bubblesGame',
						element: <BubblesGame />
					},
				]
			},
			{
				path: '/demos',
				element: <Demos />,
				children: [
					{
						path: '',
						element: <Navigate to='/demos/markets'></Navigate>
					},
					{
						path: 'markets',
						element: <Markets />,
					}
				]
			}
		]

	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className=' bg-white text-black w-[100vw] h-[100vh] overflow-scroll'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>,
)
