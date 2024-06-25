import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import './main.css'
import Game from './pages/game/Game';
import XOGame from './pages/game/XOGame/XOGame';
import MpGame from './pages/game/MpGame/MpGame';
import './assets/css/base.css'
import './assets/css/layout.css'
import AddGame from './pages/game/AddGame/AddGame';
import BubblesGame from './pages/game/BubblesGame/BubblesGame';
import TDGame from './pages/game/TDGame/TDGame';
import Home from './pages/home/Home';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />

  },
  {
    path: "/game",
    element: <Game />,
    children: [
      {
        path: 'xogame',
        element: <XOGame />
      }, {
        path: 'mpgame',
        element: <MpGame />
      }, {
        path: 'addGame',
        element: <AddGame />
      },
      {
        path: 'bubblesGame',
        element: <BubblesGame />
      },
      {
        path: 'tdGame',
        element: <TDGame />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-black  text-white w-[100vw] h-[100vh] overflow-scroll'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
