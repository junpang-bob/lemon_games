import { Outlet, } from 'react-router-dom'
import styles from './Game.module.scss'
export default function Game() {
  return (
    <>
      <div className={styles.gameContext}>
        <div className={styles.gameList}>
          <div style={{marginBottom:'10px'}}>九宫格</div>
          <div style={{marginBottom:'10px'}}>mpGame</div>
        </div>
        <div className={`${styles.gameContainer} lemon_center`}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
