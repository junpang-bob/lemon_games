
import { MutableRefObject, useRef, useEffect, useState } from 'react';
import './GreedySnake.scss'
type Direction = 'ArrowLeft' | 'ArrowRight' | 'ArrowDown' | 'ArrowUp';
export default function GreedySnake() {
  const [direction, setDirection] = useState('ArrowRight');
  const snakeRef: MutableRefObject<null | HTMLDivElement> = useRef(null)
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      setDirection(e.key);
    })
  }, [])
  useEffect(() => {
    const timer = setInterval(() => {
      if (snakeRef.current) {
        if (direction === "ArrowDown") {
          const distanceTop = snakeRef.current.offsetTop + 5
          const distanceLeft = snakeRef.current.offsetLeft
          snakeRef.current.setAttribute('style',
            `transform: rotate(180deg);top:${distanceTop}px;left:${distanceLeft}px`)
        } else if (direction === "ArrowUp") {
          const distanceTop = snakeRef.current.offsetTop - 5
          const distanceLeft = snakeRef.current.offsetLeft
          snakeRef.current.setAttribute('style',
            `transform: rotate(0deg);top:${distanceTop}px;left:${distanceLeft}px`)
        } else if (direction === "ArrowRight") {
          const distanceTop = snakeRef.current.offsetTop
          const distanceLeft = snakeRef.current.offsetLeft + 5
          snakeRef.current.setAttribute('style',
            `transform: rotate(90deg);top:${distanceTop}px;left:${distanceLeft}px`)
        } else if (direction === 'ArrowLeft') {
          const distanceTop = snakeRef.current.offsetTop
          const distanceLeft = snakeRef.current.offsetLeft - 5
          snakeRef.current.setAttribute('style',
            `transform: rotate(270deg);top:${distanceTop}px;left:${distanceLeft}px`)
        }
      }
    }, 50)
    return () => {
      // console.log('测试');
      return clearInterval(timer)
    }
  }, [direction])

  return <div className="relative w-[400px] h-[400px] bg-slate-500">
    <div ref={snakeRef} className='snake-header'>贪</div>
  </div>
}
