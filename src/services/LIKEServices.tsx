import { host } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"
import { tokenStorage } from "./USERServices"

export const LIKEServices = {
    GETLike: (idpost: number, author: numsrting = '') => {
        return RQRequestGET(`${host}news/search/like/?post=${idpost}&author=${author}&limit=1`)
    },
    CREATELike: (body: any) => {
        return RQRequestPOST(`${host}news/reg/like/`, body)
    },
    DELETELike: (id: number) => {
        return fetch(`${host}news/delete/like/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as any).access}`
            }
        }).then(rezults => rezults.json)
    }
}