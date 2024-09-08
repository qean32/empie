import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const LIKEServices = {
    GETLikes: (idpost: number) => {
        RQRequestGET(`${idpost} ${host}`)
    },
    CREATELike: (body: any) => {
        RQRequestPOST(`${host}`, body)
    },
    GETLike: (id: number, idpost: number) => {
        RQRequestGET(`${host} ${id} ${idpost}`)
    },
    DELETELike: (id: number) => {
        return fetch(`${host} ${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Autorization': `JWT ${localStorage.getItem('token')}`
            }
        }).then(rezults => rezults.json)
    }
}