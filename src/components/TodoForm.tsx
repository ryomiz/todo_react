import { VFC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorMessage } from './ErrorMessage'
import { Input } from './Input'

import type { InputValue } from 'src/types'

import { useTask } from 'src/hooks/useTask'

export const TodoForm: VFC = () => {
  const { createTask } = useTask()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputValue>({
    mode: 'onSubmit',
  })

  const onSubmit: SubmitHandler<InputValue> = (data) => {
    createTask(data.todo)
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 mb-8 flex flex-col rounded shadow"
    >
      <div className=" flex gap-4">
        {/* // TODOの入力を受け取り、バリデーションを行うコンポーネント */}
        <Input register={register} />
        <input
          type="submit"
          value="追加"
          className="rounded bg-indigo-500 text-white px-12 py-2 cursor-pointer hover:bg-indigo-700"
        />
      </div>
      {errors.todo && <ErrorMessage errorType={errors.todo.type} />}
    </form>
  )
}
