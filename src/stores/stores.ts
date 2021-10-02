import { atom } from 'recoil'

import type { TodoList } from 'src/types'

export const uncompletedTasks = atom<TodoList>({
  key: 'uncompletedTasks',
  default: [''],
})

export const completedTasks = atom<TodoList>({
  key: 'completedTasks',
  default: [''],
})

export const errorMessageState = atom<'none' | 'noInput' | 'duplicated'>({
  key: 'errorMessageState',
  default: 'noInput',
})
