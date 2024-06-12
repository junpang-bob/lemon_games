import { useContext, useState } from "react";
import { TasksContext, TasksReducerContext } from "../../../../context/taskContext";
function Task({ task }: { task: Task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskName, setTaskName] = useState(task.taskName)
  const [done, setDone] = useState(task.done)
  const dispatch = useContext(TasksReducerContext);
  function handleSaveClick() {
    setIsEdit(false);
    dispatch({ type: 'changed', task: { ...task, taskName, done } })
  }
  function handleCheckedClick(done: boolean) {
    setDone(done)
    dispatch({ type: 'changed', task: { ...task, taskName, done } })
  }
  let taskContent = null;
  if (isEdit) {
    taskContent = <>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={handleSaveClick}>save</button>
    </>
  } else {
    taskContent = <>
      {taskName}
      <button onClick={() => setIsEdit(true)}>edit</button>
    </>
  }
  return <>
    <input checked={done} onChange={(e) => handleCheckedClick(e.target.checked)} type="checkbox" name="" id="" />
    {taskContent}
    <button onClick={() => dispatch({ type: 'delete', id: task.id })}>delete</button>
  </>
}


function TaskList() {
  const taskList = useContext(TasksContext);
  const tasks = taskList.map(item => {
    return <li key={item.id}>
      <Task task={item} />
    </li>
  })
  return <>
    <ul>
      {tasks}
    </ul>
  </>
}

export default TaskList
