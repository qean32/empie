import { host } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const MEETINGServices = {
    GETMeeting: (offset?: number, id: numsrting = '', limit: number = 6, tournament: numsrting = '', is_qualification: boolean = false, direction: numsrting = '') => {
        return RQRequestGET(`${host}unification/search/meeting/?offset=${offset}&id=${id}&limit=${limit}&tournament=${tournament}&is_qualification=${is_qualification}&direction=${direction}`)
    },
    CREATEMeeting: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/meeting/`, body)
    },
    UPDATEMeeting: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/meeting/${id}/`, body)
    }
}