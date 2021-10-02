import { VFC } from 'react'
import { RecoilRoot } from 'recoil'
import { Headline } from './components/Headline'
import { TodoForm } from './components/TodoForm'
import { UncompletedTasksList } from './components/UncompletedTasksList'
import { CompletedTasksList } from './components/CompletedTasksList'

export const App: VFC = () => {
  return (
    <RecoilRoot>
      <div className="container w-full max-w-screen-lg mx-auto p-6 flex flex-col">
        <Headline />
        <TodoForm />
        <div className="flex gap-8 justify-center items-start">
          <UncompletedTasksList />
          <CompletedTasksList />
        </div>
      </div>
    </RecoilRoot>
  )
}
