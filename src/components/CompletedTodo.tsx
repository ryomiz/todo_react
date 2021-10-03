import { VFC } from 'react'
import { useRecoilState } from 'recoil'

import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type Props = {
  todo: string
}

export const CompletedTodo: VFC<Props> = (props) => {
  const [uncompleted, setUncompleted] = useRecoilState(uncompletedTasks)
  const [completed, setCompleted] = useRecoilState(completedTasks)

  const revertTask = (todo: string): void => {
    const newUncompleted = [...uncompleted, todo]
    const newCompleted = completed.filter((td) => td !== todo)
    setUncompleted(newUncompleted)
    setCompleted(newCompleted)
  }

  const deleteTask = (todo: string): void => {
    const newCompleted = completed.filter((td) => td !== todo)
    setCompleted(newCompleted)
  }

  const { todo } = props

  return (
    <div className="flex items-center justify-between p-4 bg-red-100 rounded">
      <span className="text-xl">{todo}</span>
      <div className="flex gap-1">
        <button
          type="button"
          className="bg-red-400 text-white px-4 py-1 rounded"
          onClick={(): void => revertTask(todo)}
        >
          戻す
        </button>
        <button
          type="button"
          className="bg-red-700 text-white px-4 py-1 rounded"
          onClick={(): void => deleteTask(todo)}
        >
          削除
        </button>
      </div>
    </div>
  )
}
