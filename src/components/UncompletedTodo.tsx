import { memo, VFC } from 'react'

import { useTask } from 'src/hooks/useTask'

type Props = {
  todo: string
}

export const UncompletedTodo: VFC<Props> = memo((props) => {
  const { todo } = props
  const { completeTask } = useTask()
  return (
    <div className="flex items-center justify-between p-4 bg-blue-100 rounded">
      <span className="text-xl">{todo}</span>
      <button
        type="button"
        className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
        onClick={(): void => completeTask(todo)}
      >
        完了
      </button>
    </div>
  )
})
