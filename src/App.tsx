import { Headline } from './components/Headline'

export const App = () => {
  return (
    <div className="container w-full max-w-screen-lg mx-auto p-6 flex flex-col">
      <Headline />
      <form className="p-6 mb-8 flex gap-4 rounded shadow">
        <input
          type="text"
          placeholder="やることを入力"
          className="flex-1 rounded px-4 py-2"
        />
        <input
          type="submit"
          value="追加"
          className="rounded bg-indigo-500 text-white px-12 py-2"
        />
      </form>
      <div className="flex gap-8 justify-center">
        <div className="flex-1 p-6 rounded shadow">
          <h2 className="mb-8 text-center text-xl">未完了のタスク</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-blue-100 rounded">
              <span className="text-xl">草刈り</span>
              <button
                type="button"
                className="bg-blue-400 text-white px-4 py-1 rounded"
              >
                完了
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-100 rounded">
              <span className="text-xl">草刈り</span>
              <button
                type="button"
                className="bg-blue-400 text-white px-4 py-1 rounded"
              >
                完了
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-100 rounded">
              <span className="text-xl">草刈り</span>
              <button
                type="button"
                className="bg-blue-400 text-white px-4 py-1 rounded"
              >
                完了
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 rounded shadow">
          <h2 className="mb-8 text-center text-xl">完了したタスク</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-red-100 rounded">
              <span className="text-xl">草刈り</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="bg-red-400 text-white px-4 py-1 rounded"
                >
                  戻す
                </button>
                <button
                  type="button"
                  className="bg-red-700 text-white px-4 py-1 rounded"
                >
                  削除
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-100 rounded">
              <span className="text-xl">草刈り</span>
              <button
                type="button"
                className="bg-red-400 text-white px-4 py-1 rounded"
              >
                完了
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-100 rounded">
              <span className="text-xl">草刈り</span>
              <button
                type="button"
                className="bg-red-400 text-white px-4 py-1 rounded"
              >
                完了
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
