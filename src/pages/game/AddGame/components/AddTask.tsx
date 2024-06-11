import { useState } from "react"


function AddTask({ onAddTask }: { onAddTask: (taskName: string) => void }) {
  const [taskName, setTaskName] = useState('');
  function handleClick() {
    onAddTask(taskName)
  }
  return <div>
    <input type="text" placeholder="add task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
    <button onClick={handleClick}>add</button>
  </div>
}

export default AddTask
