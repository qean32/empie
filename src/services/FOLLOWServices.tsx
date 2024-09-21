import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const FOLLOWServices = {
    GETFollow: (for_: number, who: number) => {
        RQRequestGET(`${for_} ${host} ${who}`)
    },
    CREATEFollow: (body: any) => {
        RQRequestPOST(`${host}`, body)
    },
    GETFollows: (for_: number) => {
        RQRequestGET(`${host} ${for_}`)
    },
    DELETEFollow: (who: number, for_: number) => {
        return fetch(`${host} ${who} ${for_}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Autorization': `JWT ${localStorage.getItem('token')}`
            }
        }).then(rezults => rezults.json)
    }
}