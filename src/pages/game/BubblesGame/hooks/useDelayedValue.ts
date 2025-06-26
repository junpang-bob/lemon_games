import { useEffect, useState } from 'react'
const test = "test";
function useDelayedValue<T>(value: T, delay: number) {
  const [delayedValue, setDelayedValue] = useState(value)
  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value)
    }, delay)
  }, [value, delay])

  return delayedValue
}
export { useDelayedValue }
