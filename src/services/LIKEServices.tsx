import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPOST from "../Functions/RQRequestPOST"

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