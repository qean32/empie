import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const TOURNAMENTServices = {
    GETTournamet: (id: number | string = '') => {
        return RQRequestGET(`${host}unification/search/tournament/?id=${id}`)
    },
    GETTouramentShort: (offset: number = 0, winteam: number | string = '') => {
        return RQRequestGET(`${host}unification/search/tournament/short/?offset=${offset}&win_team=${winteam}`)
    },
    CREATETournament: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/tournament/`, body)
    },
    UPDATETournamet: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/tournament/${id}/`, body)
    }
}