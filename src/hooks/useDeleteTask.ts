import { useRecoilState } from 'recoil'

import { completedTasks } from 'src/stores/stores'

type ReturnValue = {
  deleteTask: (todo: string) => void
}

export const useDeleteTask = (): ReturnValue => {
  const [completed, setCompleted] = useRecoilState(completedTasks)
  const deleteTask = (todo: string): void => {
    const newCompleted = completed.filter((td) => td !== todo)
    setCompleted(newCompleted)
  }
  return { deleteTask }
}
