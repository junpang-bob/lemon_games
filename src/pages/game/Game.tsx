import { Outlet, Link } from 'react-router-dom'
import styles from './Game.module.scss'

export default function Game() {
	return (
		<>
			<div className={styles.gameContext}>
				<div className={styles.gameList}>
					<div style={{ marginBottom: '10px' }}><Link to="/game/xogame">九宫格</Link></div>
					<div style={{ marginBottom: '10px' }}> <Link to="/game/bubblesGame">bubblesGame</Link></div>
				</div>
				<div className={`${styles.gameContainer} lemon_center`}>
					<Outlet />
				</div>
			</div>
		</>
	)
}
