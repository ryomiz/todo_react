import { VFC } from 'react'

export const Headline: VFC = () => {
  return (
    <h1 className="text-center text-2xl mb-6">
      TODO APP with <span className="text-blue-400 text-3xl">React</span> ×{' '}
      <span className="text-blue-600 text-3xl"> TypeScript</span>
    </h1>
  )
}
