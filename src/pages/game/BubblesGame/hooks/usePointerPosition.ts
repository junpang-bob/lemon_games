import { useEffect, useState } from 'react'

function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    function handleMove(e: PointerEvent) {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])
  return position
}
export { usePointerPosition }
