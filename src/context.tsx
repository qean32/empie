import { createContext, useEffect } from "react";
import { useLocation } from "react-router";
import useBoolean from "./customHooks/useBoolean";

export const SomeContext: React.Context<string>  = createContext('defaultvalue')

export const Context: any = ({ children }: { children: any }) => {
    const location = useLocation()
    const loading = useBoolean(false)

    useEffect(() => {
        loading.SwapFn()

        const timeOut = setTimeout(() => {
            loading.SwapFn()
        }, 1000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [location])

    const value: any = {
        loading: loading.boolean,

    }

    return (<SomeContext.Provider value={value}>{children}</SomeContext.Provider>)
}