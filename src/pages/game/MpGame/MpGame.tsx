import React from "react"
function Mpchildren() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    alert('click from children')
  }
  return (<>
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
