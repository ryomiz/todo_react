export type TodoList = Array<string>

export type ErrorState = 'none' | 'noInput' | 'duplicated' | 'completed'

export type InputValue = {
  todo: string
}
