import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const MEETINGServices = {
    GETMeeting: (offset?: number, id: number | string = '') => {
        return RQRequestGET(`${host}unification/search/meeting/?offset=${offset}&id=${id}`)
    },
    CREATEMeeting: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/meeting/`, body)
    },
    UPDATEMeeting: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/meeting/${id}/`, body)
    }
}