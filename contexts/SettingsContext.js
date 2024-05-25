import { createContext, useContext } from "react";


export const SettingsContext = createContext(undefined)

export function useSettingsContext(){
    const settings = useContext(SettingsContext)
    if (settings === undefined){ 
        throw new Error("useUserDTOCOntext must be used within UserDTOContext")
    }
    return settings
}