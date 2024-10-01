import { createContext, useEffect } from "react";
import { useLocation } from "react-router";
import useBoolean from "./customHooks/useBoolean";

export const SomeContext: React.Context<string> = createContext('defaultvalue')

export const Context: any = ({ children }: { children: any }) => {
    const location = useLocation()
    const loading = useBoolean(false)
    const modal = useBoolean(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        modal.off()
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
        modal: modal,
    }

    return (<SomeContext.Provider value={value}>{children}</SomeContext.Provider>)
}