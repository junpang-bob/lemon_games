import { ReactElement, useReducer } from "react";
import { TasksContext, TasksReducerContext } from "../../../../context/taskContext";
type Action = { type: 'added', id: number, taskName: string } | { type: 'changed', task: Task } | { type: 'delete', id: number }
export function TasksProvider({ children }: { children: ReactElement }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initTaskList);
  return <TasksContext.Provider value={tasks}>
    <TasksReducerContext.Provider value={dispatch}>
      {children}
    </TasksReducerContext.Provider>
  </TasksContext.Provider>
}
function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case 'added':
      return [...tasks, {
        id: action.id, taskName: action.taskName, done: false,
      }]
    case 'changed':
      return tasks.map((item) => {
        if (item.id === action.task.id) return action.task;
        return item;
      });
    case 'delete':
      return tasks.filter((item) => item.id !== action.id);
    // default: {
    //   throw Error('Unknown action：' + action.type)
    // }
  }
}
const initTaskList = [
  {
    taskName: 'task1',
    done: false,
    id: 0,
  },
  {
    taskName: 'task1',
    done: false,
    id: 1,
  },
  {
    taskName: 'task1',
    done: true,
    id: 3,
  },
]

