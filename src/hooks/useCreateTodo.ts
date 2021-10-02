import { useRecoilState } from 'recoil'

import type { Dispatch, SetStateAction } from 'react'

import { useShowEerrorMessage } from 'src/hooks/useShowEerrorMessage'
import { uncompletedTasks } from 'src/stores/stores'

type ReturnValue = {
  addTodo: () => void
}

export const useCreateTodo = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>
): ReturnValue => {
  const [todo, setTodo] = useRecoilState(uncompletedTasks)
  const { setShowError } = useShowEerrorMessage()
  const addTodo = (): void => {
    // 入力値がない場合
    if (!value) {
      setShowError('noInput')
      return
    }
    // 既に登録されている場合
    if (todo.includes(value)) {
      setShowError('duplicated')
      return
    }
    const newTodo = [...todo, value]
    setTodo(newTodo)
    setValue('')
  }

  return { addTodo }
}
