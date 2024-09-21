import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

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