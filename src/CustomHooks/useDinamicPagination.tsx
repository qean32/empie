import { useEffect, useRef } from "react"
import useHandlerScroll from "./useHandlerScroll"

export default (function_: Function) => {
    const scrollRef = useRef<any>()
    const HandlerScroll = useHandlerScroll(scrollRef)

    useEffect(() => {
        if (HandlerScroll) {
            setTimeout(() =>
                function_()
                , 600)
        }
    }, [HandlerScroll])

    return scrollRef
}