import { useEffect, useState } from "react"
import useHandlerScroll from "./useHandlerScroll"
import { useQuery } from "react-query"

export default (fetch_: Function, ref: any , RQkey: string, daley: number = 4, offset_: number = 0, arguments_: any = '') => {
    const HandlerScroll = useHandlerScroll(ref)

    const [offset, setOffset] = useState<any>(offset_)
    const [finaldata, setFinalData] = useState<any[]>([])
    const RQData: any = useQuery([RQkey, offset, ...arguments_], () => fetch_(offset), { keepPreviousData: true, refetchOnWindowFocus: false })


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

    return { RQData, offset, finaldata }
}