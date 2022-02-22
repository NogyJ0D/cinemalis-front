import { createContext, useReducer } from 'react'
import globalReducer, { initialState } from '../reducers/globalReducer'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [store, dispatch] = useReducer(globalReducer, initialState)

  return (
    <GlobalContext.Provider value={[store, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext }
export default GlobalProvider
