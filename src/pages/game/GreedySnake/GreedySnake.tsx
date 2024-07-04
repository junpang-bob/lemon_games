
import { MutableRefObject, useRef, useEffect, useState } from 'react';
import './GreedySnake.scss'
import { useDelayedValue } from '../BubblesGame/hooks/useDelayedValue';
// type Direction = 'ArrowLeft' | 'ArrowRight' | 'ArrowDown' | 'ArrowUp';

function SnakeBody({ positionTop, positionLeft, rotate }:
  { positionTop: number, positionLeft: number, rotate: string }) {
  return <div className='snake-body' style={{
    top: `${positionTop}px`, left: `${positionLeft}px`, transform: rotate
  }}>猴</div >
}


export default function GreedySnake() {
  const [direction, setDirection] = useState('ArrowRight');
  const snakeRef: MutableRefObject<null | HTMLDivElement> = useRef(null)
  const [header, setHeader] = useState({ top: 0, left: 0, rotate: 'rotate(90deg)' });
  const next1 = useDelayedValue(header, 200);
  const next2 = useDelayedValue(header, 400);
  useEffect(() => {
    const ctrlList = ['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'];
    window.addEventListener('keydown', (e) => {
      setDirection(direction => {
        /**
         * todo
         * 代码待优化
         */
        if (ctrlList.some(item => item === e.key)) {
          if (
            ((direction === 'ArrowLeft' || direction === 'ArrowRight')
              && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) ||
            ((direction === 'ArrowDown' || direction === 'ArrowUp') &&
              (e.key === 'ArrowDown' || e.key === 'ArrowUp'))
          ) {
            return direction
          }
          return e.key
        } else {
          return direction
        }
      });
    })
  }, [])
  // useEffect(() => {
  //   console.log('test1');

  //   const timer = setInterval(() => {
  //     setHeader((header) => {
  //       if (direction === 'ArrowDown') {
  //         return { top: header.top + 5, left: header.left, rotate: 'rotate(180deg)' }
  //       }
  //       else if (direction === 'ArrowUp') {
  //         return { top: header.top - 5, left: header.left, rotate: 'rotate(0deg)' }
  //       }
  //       else if (direction === 'ArrowRight') {
  //         return { top: header.top, left: header.left + 5, rotate: 'rotate(90deg)' }
  //       }
  //       else if (direction === 'ArrowLeft') {
  //         return { top: header.top, left: header.left - 5, rotate: 'rotate(270deg)' }
  //       }
  //       return { top: 0, left: 0, rotate: 'rotate(90deg)' }
  //     })
  //   }, 50)
  //   return () => {
  //     console.log('测试');
  //     return clearInterval(timer)
  //   }
  // }, [direction])

  return <div className="relative w-[400px] h-[400px] bg-slate-500">
    失败了，不知道咋写好了
    {/* <SnakeBody positionLeft={next2.left} positionTop={next2.top} rotate={next2.rotate} />
    <SnakeBody positionLeft={next1.left} positionTop={next1.top} rotate={next1.rotate} />
    <div ref={snakeRef} className='snake-header' style={{ top: `${header.top}px`, left: `${header.left}px`, transform: header.rotate }}>猴</div> */}
  </div>
}
