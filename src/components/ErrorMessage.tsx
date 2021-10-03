import { memo, VFC } from 'react'

type Props = {
  errorType: string
}

export const ErrorMessage: VFC<Props> = memo((props) => {
  const { errorType } = props
  let errorMessage = ''
  switch (errorType) {
    case 'required':
      errorMessage = 'タスクを入力してください！'
      break
    case 'duplicated':
      errorMessage = '既に登録されたタスクです！'
      break
    case 'completed':
      errorMessage = '既に完了したタスクです！'
      break
    default:
      break
  }

  return <p className="mt-2 ml-4 text-xs text-red-700">{errorMessage}</p>
})
