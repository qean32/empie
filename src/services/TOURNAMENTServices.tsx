import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPATCH from "../Functions/RQRequestPATCH"
import RQRequestPOST from "../Functions/RQRequestPOST"

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