import { useEffect, useState } from "react"
import { host } from "../exports"
import { GetNewTime } from "../functions/getNewTime"

export const useRealTimeRequest = () => {
    const [finaldata, setFinalData] = useState<any>(false)

    useEffect(() => {
        const Request = async () => {
            const time = GetNewTime()
            const response = await fetch(`${host}unification/longpoll/offers/1/${time.split(' ')[0]}_${time.split(' ')[1]}/`)

            const data = await response.json()
            if (Array.isArray(data.data)) {
                setFinalData(data.data)
                setTimeout(() => {
                    Request()
                }, 100000);
            } else {
                Request()
            }
        }
        Request()
    }, [])


    return { finaldata }
}