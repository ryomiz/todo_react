import { VFC } from 'react'
import { useRecoilValue } from 'recoil'

import { CompletedTodo } from 'src/components/CompletedTodo'
import { completedTasks } from 'src/stores/stores'

export const CompletedTasksList: VFC = () => {
  const todo = useRecoilValue(completedTasks)

  return (
    <div className="flex-1 p-6 rounded shadow">
      <h2 className="mb-8 text-center text-xl">完了したタスク</h2>
      <div className="flex flex-col gap-4">
        {todo.map((td: string) => td && <CompletedTodo todo={td} />)}
      </div>
    </div>
  )
}