import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"

export const POSTServices = {
    GETPost: (offset: number, limit: number = 4) => {
        return RQRequestGET(`${host}news/search/news/?offset=${offset}&limit=${limit}`)
    },
    // CREATEPost: (body: any) => {
    //     return RQRequestPOST(`${host}`, body)
    // },
    // UPDATEPost: (body: any, id: number) => {
    //     return RQRequestPATCH(`${host} ${id}`, body)
    // }
}