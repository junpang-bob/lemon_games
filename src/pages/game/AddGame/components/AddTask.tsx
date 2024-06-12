import { useContext, useState } from "react"
import { TasksReducerContext } from "../../../../context/taskContext";

let nextId = 3;
function AddTask() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useContext(TasksReducerContext)
  function handleClick() {
    dispatch({ type: 'added', taskName, id: nextId++ })
  }
  return <div>
    <input type="text" placeholder="add task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
    <button onClick={handleClick}>add</button>
  </div>
}

export default AddTask
