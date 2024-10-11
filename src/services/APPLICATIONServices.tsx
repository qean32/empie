import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const APPLICATIONServices = {
    GETApplication: (id: number) => {
        return RQRequestGET(`${host}unification/search/application/tournament/?id=${id}&limit=99`)
    },
    CREATEApplication: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/application/tournament/`, body)
    },
    UPDATEApplication: (body: any, id: number) => {
        return RQRequestPATCH(`${host}update/application/tournament/${id}/`, body)
    }
}