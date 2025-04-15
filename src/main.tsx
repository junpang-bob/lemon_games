import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
    RouterProvider,
    createHashRouter,
    Navigate
} from "react-router-dom";
import './main.css'
import Game from './pages/game/Game';
import XOGame from './pages/game/XOGame/XOGame';
import './assets/css/base.css'
import './assets/css/layout.css'
import BubblesGame from './pages/game/BubblesGame/BubblesGame';
import Home from './pages/home/Home';
import Demos from './pages/demos/Demos';
import Markets from './pages/demos/markets/Markets';
import CodeTest from './pages/reactLearn/CodeTest';
import Login from './pages/login/Login';
import { ConfigProvider } from 'antd'
import Blog from './pages/blog/Blog';
import PixiTag from './pages/demos/pixiTag/pixiTag';
import BlogArticle from './pages/blog/BlogArticle';
const darkTheme = {
    token: {
        // 主题色
        colorPrimary: '#00b894',
        colorInfo: '#00b894',
        colorSuccess: '#00b894',
        colorWarning: '#f1c40f',
        colorError: '#e74c3c',

        // 背景色
        colorBgContainer: '#1e1e1e',
        colorBgElevated: '#2d2d2d',
        colorBgLayout: '#141414',

        // 文字颜色
        colorText: '#ffffff',
        colorTextSecondary: 'rgba(255, 255, 255, 0.85)',
        colorTextTertiary: 'rgba(255, 255, 255, 0.65)',

        // 边框
        colorBorder: '#333333',
        colorBorderSecondary: '#1f1f1f',

        // 其他
        borderRadius: 4,
        controlHeight: 32,

        // 禁用状态
        colorTextDisabled: 'rgba(255, 255, 255, 0.25)',
        colorBgContainerDisabled: 'rgba(255, 255, 255, 0.04)',
    },
    components: {
        Button: {
            colorPrimaryHover: '#00d6a9',
            algorithm: true, // 启用算法
        },
        Input: {
            colorBgContainer: '#2d2d2d',
            colorBorder: '#333333',
        },
        Select: {
            colorBgContainer: '#2d2d2d',
            colorBorder: '#333333',
        },
        Menu: {
            colorItemBg: 'transparent',
            colorItemBgHover: 'rgba(255, 255, 255, 0.04)',
        }
    }
};

const router = createHashRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'game',
                element: <Game />,
                children: [
                    {
                        index: true,  // 使用 index 路由
                        element: <Navigate to='xogame' relative="route" />
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
                path: 'demos',
                element: <Demos />,
                children: [
                    {
                        index: true,
                        element: <Navigate to='pixiTag' relative="route" />
                    },
                    {
                        path: 'markets',
                        element: <Markets />,
                    },
                    {
                        path: 'pixiTag',
                        element: <PixiTag />
                    }
                ]
            },
            {
                path: 'blog',
                element: <Blog />,
                children: [
                    {
                        path: ':id',
                        element: <BlogArticle />
                    }
                ]
            },
            {
                path: 'codeTest',
                element: <CodeTest />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider theme={darkTheme}>
            <RouterProvider router={router} />
        </ConfigProvider>
    </React.StrictMode>,
)
