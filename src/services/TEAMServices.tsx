import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPATCH from "../Functions/RQRequestPATCH"
import RQRequestPOST from "../Functions/RQRequestPOST"

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