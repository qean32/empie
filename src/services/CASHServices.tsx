import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const CASHServices = {
    GETCashes(offset: number) {
        RQRequestGET(`${host}/...${offset}`)
    },
    CREATECash(body: any) {
        RQRequestPOST('', body)
    },
    GETCashList() {
        RQRequestGET(`${host}/...`)
    },
    DELETECash: (id: number) => {
        return fetch(`${host} ${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Autorization': `JWT ${localStorage.getItem('token')}`
            }
        }).then(results => results.json())
    }
}