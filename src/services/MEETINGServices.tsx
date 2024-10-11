import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const MEETINGServices = {
    GETMeeting: (offset?: number, id: number | string = '', limit: number = 6, tournament: number | string = '', is_qualification: boolean = false) => {
        return RQRequestGET(`${host}unification/search/meeting/?offset=${offset}&id=${id}&limit=${limit}&tournament=${tournament}&is_qualification=${is_qualification}`)
    },
    CREATEMeeting: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/meeting/`, body)
    },
    UPDATEMeeting: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/meeting/${id}/`, body)
    }
}