import { createContext, useEffect } from "react";
import { useLocation } from "react-router";
import { USERServices } from "./services/USERServices";
import { jwtDecode } from "jwt-decode";
import { tokenStorage } from "./exports";
import useBoolean from "./customHooks/useBoolean";

export const SomeContext: React.Context<string> = createContext('defaultvalue')

export const Context: any = ({ children }: { children: any }) => {
    const location = useLocation()
    const user: any = localStorage.getItem(tokenStorage) ? jwtDecode(localStorage.getItem(tokenStorage) as any) : 'no user'
    const modalregistration = useBoolean(false)

    useEffect(() => {
        user != 'no user' && USERServices.REFRESHUser()
        const refresh = setInterval(() => {
            user != 'no user' && USERServices.REFRESHUser()
        }, 210000)

        return () => {
            clearInterval(refresh)
        }
    }, [location])

    const value: any = {
        user: user,
        modalregistration,
    }

    return (<SomeContext.Provider value={value}>{children}</SomeContext.Provider>)
}