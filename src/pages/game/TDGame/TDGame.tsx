import { MutableRefObject, useRef } from "react"

const list = [
  {
    td: 12,
  },
  {
    td: 13,
  },
  {
    td: 14,
  },
  {
    td: 15,
  }
]

function TDGame() {
  const testInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const itemsRef: MutableRefObject<Map<number, HTMLLIElement> | null> = useRef(null);

  function handleClick() {
    testInputRef.current?.focus()
  }
  function getMap() {
    if (!itemsRef.current) {
      // 首次运行时初始化 Map。
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function handleListClick() {
    console.log(itemsRef.current);
  }
  return <div>
    <div>
      <input type="text" ref={testInputRef} />
      <button onClick={handleClick}>世界聚焦</button>
    </div>
    <div>
      <ul>
        {list.map(item => {
          return <li key={item.td} ref={(node) => {
            const map = getMap()
            if (node) map.set(item.td, node)
            else map.delete(item.td)
          }}>测试案例</li>
        })}
      </ul>
      <button onClick={handleListClick}>列表获取ref</button>
    </div>
  </div>
}

export default TDGame
