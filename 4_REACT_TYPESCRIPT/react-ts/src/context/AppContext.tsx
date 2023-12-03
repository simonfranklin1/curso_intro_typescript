import {createContext} from 'react'

interface IAppContext {
    language: string,
    framework: string,
    projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({children}: any) => {

    const contextValue: IAppContext = {
        language: "JavaScript",
        framework: "Express",
        projects: 5
    }

   return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
   ) 
}