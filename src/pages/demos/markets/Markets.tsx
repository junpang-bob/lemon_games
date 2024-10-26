import { Button } from "antd"
import { useCallback, useState } from "react"
function TestFrom() {
	let a = 1;
	useCallback(() => {
		console.log(a);
	}, [a])
	return <>
		<div>测试案例</div>
	</>
}



function List() {
	const b = [1, 2, 3, 4]
	const list = b.map(item => <li key={item}>{item}</li>)
	return <>
		{list}
	</>
}


function AddTest() {
	const [count, setCount] = useState(0)
	function addClick() {
		setCount((count) => count + 1)
		setCount((count) => count + 1)
		setCount((count) => count + 1)
	}
	return <>
		<button onClick={addClick}>
			+3
		</button>
		<span>{count}</span>
	</>
}

export default function Markets() {

	return <div>
		<TestFrom />
		<List />
		<AddTest />
		<Button type="primary">
			test
		</Button>
	</div>
}
