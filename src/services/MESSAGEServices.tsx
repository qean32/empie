import { host } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const MESSAGEServices = {
    CREATEMessage: (body: any) => {
        return RQRequestPOST(`${host}chat/reg/message/`, body)
    },
    GETMessage: (offset: any) => {
        return RQRequestGET(`${host}chat/search/message/?offset=${offset}&limit=14`)
    },
}