import { host } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import { numsrting } from "../models/numsrting"

export const POSTServices = {
    GETPost: (offset: number, direction: numsrting = '', limit: number = 4, is_blog: boolean = false) => {
        return RQRequestGET(`${host}news/search/news/?offset=${offset}&limit=${limit}&direction=${direction}&is_blog=${is_blog}`)
    },
    // CREATEPost: (body: any) => {
    //     return RQRequestPOST(`${host}`, body)
    // },
    // UPDATEPost: (body: any, id: number) => {
    //     return RQRequestPATCH(`${host} ${id}`, body)
    // }
}