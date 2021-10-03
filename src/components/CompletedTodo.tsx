import { VFC } from 'react'

import { useDeleteTask } from 'src/hooks/useDeleteTask'
import { useRevertTask } from 'src/hooks/useRevertTask'

type Props = {
  todo: string
}

export const CompletedTodo: VFC<Props> = (props) => {
  const { todo } = props

  const { revertTask } = useRevertTask()
  const { deleteTask } = useDeleteTask()

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
