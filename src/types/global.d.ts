export { }
declare global {
  interface Task {
    id: number
    taskName: string
    done: boolean
  }
}
