import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const MATCHServices = {
    GETMatch: (meeting: number, offset?: number) => {
        return RQRequestGET(`${host}unification/search/match/?offset=${offset}&meeting=${meeting}`)
    },
    CREATEMatch: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/match/`, body)
    },
    UPDATEMatch: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/match/${id}/`, body)
    }
}