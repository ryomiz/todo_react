import { VFC } from 'react'
import { useRecoilValue } from 'recoil'

import { UncompletedTodo } from 'src/components/UncompletedTodo'
import { uncompletedTasks } from 'src/stores/stores'

export const UncompletedTasksList: VFC = () => {
  const todo = useRecoilValue(uncompletedTasks)
  return (
    <div className="flex-1 p-6 rounded shadow">
      <h2 className="mb-8 text-center text-xl">未完了のタスク</h2>
      <div className="flex flex-col gap-4">
        {todo.map((td: string) => td && <UncompletedTodo todo={td} />)}
      </div>
    </div>
  )
}
