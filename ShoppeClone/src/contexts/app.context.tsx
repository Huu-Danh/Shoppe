import { createContext, useState } from 'react'
import { getAccessTokenFromLS } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const initalAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextInterface>(initalAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initalAppContext.isAuthenticated)
  return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AppContext.Provider>
}
