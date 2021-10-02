import { useState, VFC } from 'react'
import { useRecoilState } from 'recoil'

import type { ChangeEvent } from 'react'

import { uncompletedTasks } from 'src/stores/stores'

export const TodoForm: VFC = () => {
  const [todo, setTodo] = useRecoilState(uncompletedTasks)
  const [value, setValue] = useState<string>('')
  const addTodo = (): void => {
    const newTodo = [...todo, value]
    setTodo(newTodo)
  }

  return (
    <form className="p-6 mb-8 flex gap-4 rounded shadow">
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
    </form>
  )
}
