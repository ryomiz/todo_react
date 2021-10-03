import { useRecoilState } from 'recoil'

import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type ReturnValue = {
  revertTask: (arg: string) => void
}

export const useRevertTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTasks)
  const [completed, setCompleted] = useRecoilState(completedTasks)
  const revertTask = (todo: string): void => {
    const newUncompleted = [...uncompleted, todo]
    const newCompleted = completed.filter((td) => td !== todo)
    setUncompleted(newUncompleted)
    setCompleted(newCompleted)
  }
  return { revertTask }
}
