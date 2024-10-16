import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const PLAYERServices = {
    GETPlayer(offset: number = 0, teamDota: numsrting = '', teamCS: numsrting = '', user: numsrting = '') {
        return RQRequestGET(`${host}unification/search/player/?offset=${offset}&limit=10&team_dota=${teamDota}&team_cs=${teamCS}&user=${user}`)
    },
    CREATEPlayer(body: any) {
        return RQRequestPOST(`${host}unification/reg/player/`, body, false)
    },
    UPDATEPlayer: (body: any, id: number, file: boolean = false) => {
        return RQRequestPATCH(`${host}unification/update/player/${id}/`, body, file)
    },
}