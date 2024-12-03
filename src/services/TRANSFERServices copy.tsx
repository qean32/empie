import { host } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const TRANSFERServices = {
    CREATETransfer: (body: any) => {
        return RQRequestPOST(`${host}transfers/reg/`, body)
    },
    GETTransfer: (offset: number = 0, limit: number = 10) => {
        return RQRequestGET(`${host}transfers/search/?offset=${offset}&limit=${limit}`)
    },
}