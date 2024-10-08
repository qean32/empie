import { useEffect, useRef, useState } from "react"
import useHandlerScroll from "./useHandlerScroll"
import { useQuery } from "react-query"

export default (fetch_: Function, RQkey: string, daley: number = 4, offset_: number = 0, arguments_: any = '') => {
    const scrollRef = useRef<any>()
    const HandlerScroll = useHandlerScroll(scrollRef)

    const [offset, setOffset] = useState<any>(offset_)
    const [finaldata, setFinalData] = useState<any[]>([])
    const RQData: any = useQuery([RQkey, offset, ...arguments_], () => fetch_(offset), { keepPreviousData: true })


    useEffect(() => {
        if (RQData.data) { setFinalData((prev: any) => [...prev, ...RQData.data?.results]) }
    }, [RQData.data])

    useEffect(() => {
        if (HandlerScroll) {
            setTimeout(() =>
                setOffset((prev: number) => prev + daley)
                , 600)
        }
    }, [HandlerScroll])

    return { finaldata, scrollRef, offset }
}