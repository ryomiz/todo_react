import { VFC } from 'react'

type Props = {
  todo: string
}

export const CompletedTodo: VFC<Props> = (props) => {
  const { todo } = props
  return (
    <div className="flex items-center justify-between p-4 bg-red-100 rounded">
      <span className="text-xl">{todo}</span>
      <div className="flex gap-1">
        <button
          type="button"
          className="bg-red-400 text-white px-4 py-1 rounded"
        >
          戻す
        </button>
        <button
          type="button"
          className="bg-red-700 text-white px-4 py-1 rounded"
        >
          削除
        </button>
      </div>
    </div>
  )
}
