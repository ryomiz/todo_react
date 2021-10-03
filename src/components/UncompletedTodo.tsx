import { VFC } from 'react'
import { useRecoilState } from 'recoil'

import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type Props = {
  todo: string
}

export const UncompletedTodo: VFC<Props> = (props) => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTasks)
  const [completed, setCompleted] = useRecoilState(completedTasks)

  const completeTask = (todo: string): void => {
    const newUncompleted = uncompleted.filter((td) => td !== todo)
    const newCompleted = [...completed, todo]
    setUncompleted(newUncompleted)
    setCompleted(newCompleted)
  }

  const { todo } = props
  return (
    <div className="flex items-center justify-between p-4 bg-blue-100 rounded">
      <span className="text-xl">{todo}</span>
      <button
        type="button"
        className="bg-blue-400 text-white px-4 py-1 rounded"
        onClick={(): void => completeTask(todo)}
      >
        完了
      </button>
    </div>
  )
}
