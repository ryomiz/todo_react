import { useRecoilState, useRecoilValue } from 'recoil'

import type { Dispatch, SetStateAction } from 'react'

import { useShowErrorMessage } from 'src/hooks/useShowErrorMessage'
import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type ReturnValue = {
  addTodo: () => void
}

export const useCreateTodo = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>
): ReturnValue => {
  const [uncompleted, setUncompeleted] = useRecoilState(uncompletedTasks)
  const completed = useRecoilValue(completedTasks)
  const { setShowError } = useShowErrorMessage()
  const addTodo = (): void => {
    // 入力値がない場合
    if (!value) {
      setShowError('noInput')
      return
    }
    // 既に登録されている場合
    if (uncompleted.includes(value)) {
      setShowError('duplicated')
      return
    }
    // 既に完了している場合
    if (completed.includes(value)) {
      setShowError('completed')
      return
    }
    const newTodo = [...uncompleted, value]
    setUncompeleted(newTodo)
    setValue('')
  }

  return { addTodo }
}
