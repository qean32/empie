import { createContext, useEffect } from "react";
import { useLocation } from "react-router";
import { USERServices } from "./services/USERServices";
import { jwtDecode } from "jwt-decode";
import { tokenStorage } from "./exports";

export const SomeContext: React.Context<string> = createContext('defaultvalue')

export const Context: any = ({ children }: { children: any }) => {
    const location = useLocation()
    const user: any = localStorage.getItem(tokenStorage) && JSON.parse(localStorage.getItem(tokenStorage) as any).access
        ?
        jwtDecode(localStorage.getItem(tokenStorage) as any)
        :
        'no user'

    JSON.parse(localStorage.getItem(tokenStorage) as any) &&
        !JSON.parse(localStorage.getItem(tokenStorage) as any).access &&
        localStorage.removeItem(tokenStorage)

    useEffect(() => {
        window.scrollTo(0, 0);
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
    }

    return (<SomeContext.Provider value={value}>{children}</SomeContext.Provider>)
}