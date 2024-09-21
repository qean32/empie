import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const TOURNAMENTServices = {
    GETTournamets: (offset: number) => {
        RQRequestGET(`${host} ${offset}`)
    },
    GETTourament: (id: number) => {
        RQRequestGET(`${host} ${id}`)
    },
    CREATETournament: (body: any) => {
        RQRequestPOST(`${host} `, body)
    },
    UPDATETournamet: (body: any, id: number) => {
        RQRequestPATCH(`${host} ${id}`, body)
    }
}