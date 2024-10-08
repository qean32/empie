import { useEffect, useState } from "react"
import { useQuery } from "react-query"

export default (fetch_: any, RQkey: string) => {
    const [finaldata, setFinalData] = useState<any[]>([])
    const RQData: any = useQuery([RQkey],fetch_ , { keepPreviousData: true })

    useEffect(() => {
        if (RQData.data) { setFinalData((prev: any) => [...prev, ...RQData.data?.results]) }
    }, [RQData.data])

    return { finaldata, setFinalData }
}