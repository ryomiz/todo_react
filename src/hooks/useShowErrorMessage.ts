import { useEffect } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'

import { errorMessageState } from 'src/stores/stores'
import { ErrorState } from 'src/types'

type ReturnValue = {
  showError: ErrorState
  setShowError: SetterOrUpdater<ErrorState>
}

export const useShowErrorMessage = (value?: string): ReturnValue => {
  const [showError, setShowError] = useRecoilState(errorMessageState)

  // フォームに入力があったらされたらエラーメッセージを削除
  useEffect(() => {
    setShowError('none')
  }, [value])

  return { showError, setShowError }
}
