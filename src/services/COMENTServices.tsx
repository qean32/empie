import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const COMENTServices = {
    GETComent: (idpost: number, offset: number = 0, author: string | number = '') => {
        return RQRequestGET(`${host}news/search/coment/?offset=${offset}&post=${idpost}&author=${author}`)
    },
    CREATEComent: (body: any) => {
        return RQRequestPOST(`${host}news/reg/coment/`, body)
    },
}