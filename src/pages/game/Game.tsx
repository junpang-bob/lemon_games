import { Outlet, Link } from 'react-router-dom'
import styles from './Game.module.scss'
import { LevelContext } from '../../context/levelContext'
import { useContext } from 'react'

export default function Game() {
  const level = useContext(LevelContext)
  return (
    <>
      <div className={styles.gameContext}>
        <div className={styles.gameList}>
          <div style={{ marginBottom: '10px' }}><Link to="/xogame">九宫格</Link></div>
          <div style={{ marginBottom: '10px' }}> <Link to="/mpgame">mpGame</Link></div>
          <div style={{ marginBottom: '10px' }}> <Link to="/addGame">addCase</Link></div>
          <div style={{ marginBottom: '10px' }}> <Link to="/bubblesGame">bubblesGame</Link></div>
          <div style={{ marginBottom: '10px' }}> <Link to="/tdGame">tdGame</Link></div>
        </div>
        <div className={`${styles.gameContainer} lemon_center`}>
          <LevelContext.Provider value={level + 3}>
            <Outlet />
          </LevelContext.Provider>
        </div>
      </div>
    </>
  )
}
