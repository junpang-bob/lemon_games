import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Game from './pages/game/Game';
import XOGame from './pages/game/XOGame/XOGame';
import './assets/css/base.css'
import './assets/css/layout.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
    children: [
      {
        path: '/xogame',
        element: <XOGame />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
