import { createContext, useContext } from "react";


export const UserDTOContext = createContext(undefined)

export function useUserDTOContext(){
    const user = useContext(UserDTOContext)
    if (user === undefined){ 
        throw new Error("useUserDTOCOntext must be used within UserDTOContext")
    }
    return user
}