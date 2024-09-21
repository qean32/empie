import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const COMENTServices = {
    GETComents: (offset: number, idpost: number) => {
        RQRequestGET(`${offset} ${host} ${idpost}`)
    },
    CREATEComent: (body: any) => {
        RQRequestPOST(`${host}`, body)
    },
    GETComent: (id: number, idpost: number) => {
        RQRequestGET(`${host} ${id} ${idpost}`)
    }
}