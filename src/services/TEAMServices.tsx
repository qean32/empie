import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const TEAMServices = {
    GETTeam: (offset?: number, id?: number | string) => {
        return RQRequestGET(`${host}unification/search/team/?offset=${offset}?id=${id}`)
    },
    CREATETeam: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/team/`, body)
    },
    GETTeamShort: (offset?: number) => {
        return RQRequestGET(`${host}unification/search/team/short/?offset=${offset}`)
    },
    UPDATETeam: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/team/${id}/`, body)
    }
}