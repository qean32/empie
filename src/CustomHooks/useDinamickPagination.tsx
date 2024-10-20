import { useEffect, useState } from "react"
import useHandlerScroll from "./useHandlerScroll"
import { useQuery } from "react-query"

export default (fetch_: Function, ref: any, RQkey: string[], step: number = 4, offset_: number = 0) => {
    const HandlerScroll = useHandlerScroll(ref)

    const [offset, setOffset] = useState<any>(offset_)
    const [finaldata, setFinalData] = useState<any[]>([])
    const RQData: any = useQuery([...RQkey, offset], () => fetch_(offset), { keepPreviousData: true, refetchOnWindowFocus: false })


    useEffect(() => {
        RQData.data && setFinalData((prev: any) => [...prev, ...RQData.data?.results])
    }, [RQData.data])

    useEffect(() => {
        if (HandlerScroll && RQData?.data?.next) {
            setTimeout(() =>
                setOffset((prev: number) => prev + step)
                , 600)
        }
    }, [HandlerScroll])

    return { RQData, offset, finaldata }
}