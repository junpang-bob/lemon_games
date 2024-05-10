import { Outlet } from 'react-router-dom'
import styles from './Game.module.scss'
export default function Game() {
  return (
    <>
      <div className={styles.gameContext}>
        <div className={styles.gameList}>
          <div>九宫格</div>
        </div>
        <div className={`${styles.gameContainer} lemon_center`}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
