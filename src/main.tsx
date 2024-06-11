import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Game from './pages/game/Game';
import XOGame from './pages/game/XOGame/XOGame';
import MpGame from './pages/game/MpGame/MpGame';
import './assets/css/base.css'
import './assets/css/layout.css'
import AddGame from './pages/game/AddGame/AddGame';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
    children: [
      {
        path: '/xogame',
        element: <XOGame />
      }, {
        path: '/mpgame',
        element: <MpGame />
      }, {
        path: '/addGame',
        element: <AddGame />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
