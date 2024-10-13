import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const TEAMServices = {
    GETTeam: (offset?: number, id?: numsrting) => {
        return RQRequestGET(`${host}unification/search/team/?offset=${offset}&id=${id}`)
    },
    CREATETeam: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/team/`, body)
    },
    GETTeamShort: (offset: number = 0, direction: numsrting = '', limit: number = 8) => {
        return RQRequestGET(`${host}unification/search/team/short/?offset=${offset}&limit=${limit}&direction=${direction}`)
    },
    UPDATETeam: (body: any, id: number | undefined, file: boolean = false) => {
        return RQRequestPATCH(`${host}unification/update/team/${id}/`, body, file)
    }
}