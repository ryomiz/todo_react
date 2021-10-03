import { atom } from 'recoil'

import type { ErrorState, TodoList } from 'src/types'

export const uncompletedTasks = atom<TodoList>({
  key: 'uncompletedTasks',
  default: [],
})

export const completedTasks = atom<TodoList>({
  key: 'completedTasks',
  default: [],
})

export const errorMessageState = atom<ErrorState>({
  key: 'errorMessageState',
  default: 'noInput',
})
