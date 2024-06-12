
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList";
import { TasksProvider } from "./components/TasksProvider";

function AddGame() {
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
