import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

interface CountState {
  count: number
}

type actionTypes = 'INCREASE' | 'DECREASE'

const reducer = (state: CountState, { type }: { type: actionTypes }) => {
  switch (type) {
    case 'INCREASE':
      return { count: state.count + 1 }
    case 'DECREASE':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const useCountStore = create<CountState>()(
  devtools(
    persist(
      (_set) => ({
        count: 0, // default value
      }),
      {
        name: 'count-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
)

export const dispatchForCountStore = (args: { type: actionTypes }) =>
  useCountStore.setState((state: CountState) => reducer(state, args))
