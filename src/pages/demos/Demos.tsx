import { Outlet, useOutlet } from "react-router-dom";
import { Link } from "react-router-dom"

export default function Demos() {
	return <div>
		<Link to="/demos/markets">markets</Link>
		<Outlet />
		{/* {test} */}
	</div>
}
