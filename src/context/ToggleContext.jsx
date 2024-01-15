import { createContext, useState } from "react";



export const ToggleContext = createContext()


export const ToggleContextProvider = ({children}) => {
      const [hideMenu, setHideMenu] = useState(false)
    return (
        <ToggleContext.Provider value={{hideMenu,setHideMenu}}>
           {children}
        </ToggleContext.Provider>
    )
}

