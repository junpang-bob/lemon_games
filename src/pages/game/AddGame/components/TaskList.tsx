import { useState } from "react";

type Task = {
  id: number;
  taskName: string;
  done: boolean;
}

function Task({ task, onChangeTask, onDeleteTask }:
  { task: Task, onChangeTask: (task: Task) => void, onDeleteTask: (id: number) => void }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskName, setTaskName] = useState(task.taskName)
  const [done, setDone] = useState(task.done)
  function handleSaveClick() {
    setIsEdit(false);
    onChangeTask({ ...task, taskName, done })
  }
  function handleCheckedClick(done: boolean) {
    setDone(done)
    onChangeTask({ ...task, taskName, done })
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
    <button onClick={() => onDeleteTask(task.id)}>delete</button>
  </>
}


function TaskList({ taskList, onChangeTask, onDeleteTask }:
  { taskList: Task[], onChangeTask: (task: Task) => void, onDeleteTask: (id: number) => void }) {
  const tasks = taskList.map(item => {
    return <li key={item.id}>
      {/* <input type="checkbox" name="" id="" /> */}
      <Task task={item} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
      {/* <button onClick={() => onDeleteTask(item.id)}>delete</button> */}
    </li>
  })
  return <>
    <ul>
      {tasks}
    </ul>
  </>
}

export default TaskList
