import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const MATCHServices = {
    GETMatch: (meeting: number | string = '', offset: number | string = '', team: number | string = '', team_: number | string = '', team__: number | string = '') => {
        return RQRequestGET(`${host}unification/search/match/?offset=${offset}&meeting=${meeting}&team_one=${team}&team_two=${team_}&win_team=${team__}`)
    },
    CREATEMatch: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/match/`, body)
    },
    UPDATEMatch: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/match/${id}/`, body)
    }
}