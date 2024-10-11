import { createContext, useEffect } from "react";
import { useLocation } from "react-router";
import useBoolean from "./customHooks/useBoolean";
import { tokenStorage, USERServices } from "./services/USERServices";
import { jwtDecode } from "jwt-decode";

export const SomeContext: React.Context<string> = createContext('defaultvalue')

export const Context: any = ({ children }: { children: any }) => {
    const location = useLocation()
    const loading = useBoolean(false)
    const modal = useBoolean(false)
    const user: any = localStorage.getItem(tokenStorage) ? jwtDecode(localStorage.getItem(tokenStorage) as any) : null

    useEffect(() => {
        window.scrollTo(0, 0);
        modal.off()
        loading.SwapFn()
        USERServices.REFRESHUser()

        const refresh = setInterval(() => {
            USERServices.REFRESHUser()
        }, 210000)

        const timeOut = setTimeout(() => {
            loading.SwapFn()
        }, 800)

        return () => {
            clearInterval(refresh)
            clearTimeout(timeOut)
        }
    }, [location])

    const value: any = {
        loading: loading.boolean,
        modal: modal,
        user: user,
    }

    return (<SomeContext.Provider value={value}>{children}</SomeContext.Provider>)
}