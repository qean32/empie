import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPATCH from "../Functions/RQRequestPATCH"
import RQRequestPOST from "../Functions/RQRequestPOST"

export const MATCHServices = {
    GETMatchs: (offset: number) => {
        RQRequestGET(`${offset} ${host}`)
    },
    CREATEMatch: (body: any) => {
        RQRequestPOST(`${host}`, body)
    },
    GETMatch: (id: number) => {
        RQRequestGET(`${host} ${id}`)
    },
    UPDATEMatch: (body: any, id: number) => {
        RQRequestPATCH(`${host} ${id}`, body)
    }
}