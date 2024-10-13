import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const APPLICATIONServices = {
    GETApplication: (tournament: number | string = '', team: number | string = '') => {
        return RQRequestGET(`${host}unification/search/application/tournament/?tournament=${tournament}&limit=99&team=${team}`)
    },
    CREATEApplication: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/application/tournament/`, body)
    },
    UPDATEApplication: (body: any, id: number) => {
        return RQRequestPATCH(`${host}update/application/tournament/${id}/`, body)
    }
}