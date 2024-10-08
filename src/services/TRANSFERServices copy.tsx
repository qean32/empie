import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const TRANSFERServices = {
    CREATETransfer: (body: any) => {
        return RQRequestPOST(`${host}transfers/reg/`, body)
    },
    GETTransfer: (offset?: any) => {
        return RQRequestGET(`${host}transfers/search/?offset=${offset}`)
    },
}