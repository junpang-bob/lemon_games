import React, { useContext } from "react"
import { LevelContext } from "../../../context/levelContext"
function Mpchildren() {
  const level = useContext(LevelContext)
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    alert('click from children')
  }
  return (<>
    <div>{level}</div>
    <button onClick={handleClick}>children</button>
  </>)
}
export default function MpGame() {
  return (<div>

    <div onClick={() => { alert('click from father') }}>father
      <Mpchildren />
    </div>
  </div>)
}
