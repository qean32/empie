import { useEffect, useState } from "react"
import { host } from "../exports"
import { GetNewTime } from "../functions/getNewTime"

export const useRealTimeRequest = (url_: string) => {
    const [finaldata, setFinalData] = useState<any>([])

    useEffect(() => {
        const contloroller = new AbortController

        setTimeout(() => {
            contloroller.abort()
        }, 10000);

        const Request = async () => {
            const time = GetNewTime()
            const response = await fetch(`${host}${url_}/${time.split(' ')[0]}_${time.split(' ')[1]}/`, {
                signal: contloroller.signal
            })


            const data = await response.json()
            if (Array.isArray(data.data)) {
                setFinalData((prev: any) => [...prev, ...data.data])
                setTimeout(() => {
                    Request()
                }, 100000);
            } else {
                Request()
            }

        }
        Request()
    }, [])


    return [finaldata]
}