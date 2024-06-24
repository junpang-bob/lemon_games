import { ForwardedRef, MutableRefObject, forwardRef, useEffect, useRef } from "react"

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

const MyInput = forwardRef((props: { pName: string }, ref: ForwardedRef<HTMLInputElement>) => {
  return <>
    <div>{props.pName}</div>
    <input type="text" ref={ref} />
  </>
})


function TDGame() {
  const testInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const itemsRef: MutableRefObject<Map<number, HTMLLIElement> | null> = useRef(null);
  const myInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)
  // const [count, setCount] = useState(1);
  useEffect(() => {
    // setCount(count + 1)
    console.log('开始链接了');

    console.log('我太困了');

    return () => console.log('要裂开了');


  })
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

  function handleFocusMyInput() {
    myInputRef.current?.focus()
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
    <div>
      <MyInput ref={myInputRef} pName="test" />
      <button onClick={handleFocusMyInput}>测试</button>
    </div>
  </div>
}

export default TDGame
