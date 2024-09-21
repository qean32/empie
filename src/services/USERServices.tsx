import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const USERServices = {
    GETUser(id: number) {
        RQRequestGET(`${host}/...${id}`)
    },
    CREATEUser(body: any) {
        RQRequestPOST('', body)
    },
    UPDATEUser: (body: any, id: number) => {
        RQRequestPATCH(`${host} ${id}`, body)
    }
}