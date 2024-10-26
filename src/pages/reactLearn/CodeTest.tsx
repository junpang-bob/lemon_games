import { useState } from "react"

import { SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
interface Person {
	name: string
	age: number
}
function PersonCard(props: Person) {
	return <>
		<p>name:{props.name}</p>
		<p>age:{props.age}</p>
	</>
}
export default function CodeTest() {
	// const [isChoosed, setIsChoosed] = useState(true)
	// if (isChoosed) return <PersonCard name="PPGod" age={18} />
	// else return <PersonCard name="369" age={3333} />


	const files = {}

	return (
		<SandpackProvider
			files={files}
			theme="light"
			template="react"
		>
			<SandpackLayout>
				<SandpackFileExplorer />
				<SandpackCodeEditor closableTabs showTabs />
				<SandpackPreview />
			</SandpackLayout>
		</SandpackProvider>
	)
}
