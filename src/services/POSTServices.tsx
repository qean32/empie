import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const TEAMServices = {
    GETTeams: (offset: number) => {
        RQRequestGET(`${offset} ${host}`)
    },
    CREATETeam: (body: any) => {
        RQRequestPOST(`${host}`, body)
    },
    GETTeam: (id: number) => {
        RQRequestGET(`${host} ${id}`)
    },
    UPDATETeam: (body: any, id: number) => {
        RQRequestPATCH(`${host} ${id}`, body)
    }
}