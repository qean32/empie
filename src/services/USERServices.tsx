import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPATCH from "../Functions/RQRequestPATCH"
import RQRequestPOST from "../Functions/RQRequestPOST"

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