
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList";
import { TasksProvider } from "./components/TasksProvider";
// type Action = { type: 'added', id: number, taskName: string } | { type: 'changed', task: Task } | { type: 'delete', id: number }
// const initTaskList = [
//   {
//     taskName: 'task1',
//     done: false,
//     id: 0,
//   },
//   {
//     taskName: 'task1',
//     done: false,
//     id: 1,
//   },
//   {
//     taskName: 'task1',
//     done: true,
//     id: 3,
//   },
// ]
// let nextId = 3;
// function tasksReducer(tasks: Task[], action: Action) {
//   switch (action.type) {
//     case 'added':
//       return [...tasks, {
//         id: action.id, taskName: action.taskName, done: false,
//       }]
//     case 'changed':
//       return tasks.map((item) => {
//         if (item.id === action.task.id) return action.task;
//         return item;
//       });
//     case 'delete':
//       return tasks.filter((item) => item.id !== action.id);
//     // default: {
//     //   throw Error('Unknown action：' + action.type)
//     // }
//   }
// }

function AddGame() {
  // const [tasks, dispatch] = useReducer(tasksReducer, initTaskList)
  // function handleAddTask(taskName: string) {
  //   dispatch({ type: 'added', id: nextId++, taskName })
  // }
  // function handleChangeTask(task: Task) {
  //   dispatch({ type: 'changed', task })
  // }
  // function handleDeleteTask(id: number) {
  //   dispatch({ type: 'delete', id })
  // }
  const TaskContent=<>
  <AddTask/>
  <TaskList/>
  </>
  return <>
    <h1>Day Plan</h1>
    <TasksProvider children={TaskContent}>

    </TasksProvider>
    
  </>
}



export default AddGame
