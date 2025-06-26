import { Link, Outlet } from 'react-router-dom'

export default function Demos() {
  return (
    <div>
      <Link to="/home/demos/markets">markets</Link>
      <Outlet />
      {/* {test} */}
    </div>
  )
}
