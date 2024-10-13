import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const COMENTServices = {
    GETComent: (idpost: number, offset: number = 0, author: numsrting = '') => {
        return RQRequestGET(`${host}news/search/coment/?offset=${offset}&post=${idpost}&author=${author}`)
    },
    CREATEComent: (body: any) => {
        return RQRequestPOST(`${host}news/reg/coment/`, body)
    },
}