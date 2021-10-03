import { VFC } from 'react'

import { useTask } from 'src/hooks/useTask'

type Props = {
  todo: string
}

export const CompletedTodo: VFC<Props> = (props) => {
  const { todo } = props
  const { revertTask, deleteTask } = useTask()
  return (
    <div className="flex items-center justify-between p-4 bg-red-100 rounded">
      <span className="text-xl">{todo}</span>
      <div className="flex gap-1">
        <button
          type="button"
          className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={(): void => revertTask(todo)}
        >
          戻す
        </button>
        <button
          type="button"
          className="bg-red-700 text-white px-4 py-1 rounded hover:bg-red-900"
          onClick={(): void => deleteTask(todo)}
        >
          削除
        </button>
      </div>
    </div>
  )
}
