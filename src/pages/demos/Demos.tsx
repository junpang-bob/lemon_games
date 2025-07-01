import { Link, Outlet } from 'react-router-dom'

export default function Demos() {

  const isProduction = import.meta.env.PROD
  return (
    <div>
      {!isProduction ? <Link to="/home/demos/markets">markets</Link> : null}
      <Outlet />
      {/* {test} */}
    </div>
  )
}
