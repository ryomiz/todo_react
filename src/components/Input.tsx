import { memo, VFC } from 'react'
import { useRecoilValue } from 'recoil'

import type { UseFormRegister } from 'react-hook-form'
import type { InputValue } from 'src/types/index'

import { completedTasks, uncompletedTasks } from 'src/stores/stores'

type Props = {
  register: UseFormRegister<InputValue>
}

export const Input: VFC<Props> = memo((props) => {
  const { register } = props
  const uncompleted = useRecoilValue(uncompletedTasks)
  const completed = useRecoilValue(completedTasks)

  return (
    <>
      <input
        type="text"
        placeholder="やることを入力"
        {...register('todo', {
          required: true,
          validate: {
            duplicated: (v: string) => !uncompleted.includes(v),
            completed: (v: string) => !completed.includes(v),
          },
        })}
        className="flex-1 rounded px-4 py-2"
      />
    </>
  )
})
