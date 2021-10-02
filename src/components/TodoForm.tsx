import { useState, VFC } from 'react'

import type { ChangeEvent } from 'react'

import { useCreateTodo } from 'src/hooks/useCreateTodo'
import { useShowEerrorMessage } from 'src/hooks/useShowEerrorMessage'

export const TodoForm: VFC = () => {
  const [value, setValue] = useState<string>('')
  const { addTodo } = useCreateTodo(value, setValue)
  const { showError } = useShowEerrorMessage(value)

  return (
    <div className="p-6 mb-8 flex flex-col rounded shadow">
      <div className=" flex gap-4">
        <input
          type="text"
          value={value}
          placeholder="やることを入力"
          className="flex-1 rounded px-4 py-2"
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setValue(e.target.value)
          }
        />
        <input
          type="button"
          value="追加"
          className="rounded bg-indigo-500 text-white px-12 py-2 cursor-pointer hover:bg-indigo-700"
          onClick={addTodo}
        />
      </div>
      {showError && (
        <p className="mt-2 ml-4 text-xs text-red-700">
          タスクを入力してください！
        </p>
      )}
    </div>
  )
}
