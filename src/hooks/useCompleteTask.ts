import { useRecoilState } from 'recoil'

import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type ReturnValue = {
  completeTask: (todo: string) => void
}

export const useCompleteTask = (): ReturnValue => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTasks)
  const [completed, setCompleted] = useRecoilState(completedTasks)

  const completeTask = (todo: string): void => {
    const newUncompleted = uncompleted.filter((td) => td !== todo)
    const newCompleted = [...completed, todo]
    setUncompleted(newUncompleted)
    setCompleted(newCompleted)
  }
  return { completeTask }
}
