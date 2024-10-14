import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const TOURNAMENTServices = {
    GETTournamet: (id: numsrting = '') => {
        return RQRequestGET(`${host}unification/search/tournament/?id=${id}`)
    },
    GETTouramentShort: (offset: number = 0, winteam: numsrting = '', direction: numsrting = '') => {
        return RQRequestGET(`${host}unification/search/tournament/short/?offset=${offset}&win_team=${winteam}&direction=${direction}`)
    },
    CREATETournament: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/tournament/`, body)
    },
    UPDATETournamet: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/update/tournament/${id}/`, body)
    }
}