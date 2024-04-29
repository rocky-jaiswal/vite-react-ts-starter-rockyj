import { useState, useEffect } from 'react'

import { ReactLogo } from '/@/components/ReactLogo'
import { dispatchForCountStore, useCountStore } from '/@/store'

export const HomePage: React.FC = () => {
  const countStore = useCountStore()

  const [count, setCount] = useState(0)

  useEffect(() => console.log('componentDidMount and count-Update'), [count])

  return (
    <>
      <h2>Home</h2>

      <ReactLogo />

      <button
        className="my-2 rounded-md px-4 py-1 text-2xl"
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        Add + 1: state count is: {count}
      </button>

      <button
        className="my-2 rounded-md bg-white px-4 py-1 text-2xl"
        type="button"
        onClick={() => dispatchForCountStore({ type: 'INCREASE' })}
      >
        Add + 1
      </button>

      <button
        className="my-2 rounded-md bg-white px-4 py-1 text-2xl"
        type="button"
        onClick={() => dispatchForCountStore({ type: 'DECREASE' })}
      >
        Add - 1
      </button>

      <p>Zustand count is: {countStore.count}</p>
    </>
  )
}
