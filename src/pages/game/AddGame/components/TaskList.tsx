import { useState } from "react";

type Task = {
  id: number;
  taskName: string;
  done: boolean;
}

function Task({ task, onChangeTask }: { task: Task, onChangeTask: (task: Task) => void }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskName, setTaskName] = useState(task.taskName)
  function handleSaveClick() {
    setIsEdit(false);
    onChangeTask({ ...task, taskName })
  }

  if (isEdit) {
    return <>
      <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={handleSaveClick}>save</button>
    </>
  } else {
    return <>
      {taskName}
      <button onClick={() => setIsEdit(true)}>edit</button>
    </>
  }

}

function TaskList({ taskList, onChangeTask, onDeleteTask }:
  { taskList: Task[], onChangeTask: (task: Task) => void, onDeleteTask: (id: number) => void }) {
  const tasks = taskList.map(item => {
    return <li key={item.id}>
      <input type="checkbox" name="" id="" />
      <Task task={item} onChangeTask={onChangeTask} />
      <button onClick={() => onDeleteTask(item.id)}>delete</button>
    </li>
  })
  return <>
    <ul>
      {tasks}
    </ul>
  </>
}

export default TaskList
