import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPOST from "../Functions/RQRequestPOST"

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