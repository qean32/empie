import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const LIKEServices = {
    GETLike: (idpost: number, author: number | string = '') => {
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
                'Autorization': `JWT ${localStorage.getItem('token')}`
            }
        }).then(rezults => rezults.json)
    }
}