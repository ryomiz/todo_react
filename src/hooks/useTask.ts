import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type ReturnValue = {
  createTask: (arg: string) => void
  completeTask: (arg: string) => void
  revertTask: (arg: string) => void
  deleteTask: (arg: string) => void
}

export const useTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTasks)
  const [completed, setCompleted] = useRecoilState(completedTasks)

  // TODOを追加する処理
  const createTask = useCallback(
    (todo: string): void => {
      const newTodo = [...uncompleted, todo]
      setUncompleted(newTodo)
    },
    [uncompleted, completed]
  )
  // TODOを完了させる処理
  const completeTask = useCallback(
    (todo: string): void => {
      const newUncompleted = uncompleted.filter((td) => td !== todo)
      const newCompleted = [...completed, todo]
      setUncompleted(newUncompleted)
      setCompleted(newCompleted)
    },
    [uncompleted, completed]
  )

  // TODOを未完了へ戻す処理
  const revertTask = useCallback(
    (todo: string): void => {
      const newUncompleted = [...uncompleted, todo]
      const newCompleted = completed.filter((td) => td !== todo)
      setUncompleted(newUncompleted)
      setCompleted(newCompleted)
    },
    [uncompleted, completed]
  )

  // TODOを削除する処理
  const deleteTask = useCallback(
    (todo: string): void => {
      const newCompleted = completed.filter((td) => td !== todo)
      setCompleted(newCompleted)
    },
    [uncompleted, completed]
  )

  return { createTask, completeTask, revertTask, deleteTask }
}
