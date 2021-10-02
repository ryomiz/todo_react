import { useEffect } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'

import { errorMessageState } from 'src/stores/stores'

type ReturnValue = {
  showError: boolean
  setShowError: SetterOrUpdater<boolean>
}

export const useShowEerrorMessage = (value?: string): ReturnValue => {
  const [showError, setShowError] = useRecoilState(errorMessageState)

  // 値に入力があったらされたらエラーメッセージを削除
  useEffect(() => {
    setShowError(false)
  }, [value])

  return { showError, setShowError }
}
