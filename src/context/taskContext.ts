import type { Context, Dispatch } from 'react'
import { createContext } from 'react'

type Action = { type: 'added', id: number, taskName: string } | { type: 'changed', task: Task } | { type: 'delete', id: number }
const initList: Task[] = []
export const TasksContext: Context<Task[]> = createContext(initList)
export const TasksReducerContext: Context<Dispatch<Action>> = createContext((params: Action) => {
  console.log(params)
})
