import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPOST from "../Functions/RQRequestPOST"

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