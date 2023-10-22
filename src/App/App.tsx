import { useEffect, useMemo, useReducer } from 'react'
import Router from './Router'
import Provider from './context'
import { store } from '../Core/store'
import { Reducer } from '../Core/Reducer'

function App() {
  const [state, dispatch] = useReducer(Reducer, store)
  return (
    <Provider value={{ dispatch, state }}>
      <>
        {useMemo(() => {
          return (
            <Router />)
        }, [])}
      </>
    </Provider >
  )

}

export default App
