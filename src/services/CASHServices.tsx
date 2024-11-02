import { host } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"
import { tokenStorage } from "./USERServices"

export const CASHServices = {
    GETCash(offset?: number) {
        return RQRequestGET(`${host}cash/search/cash/?offset=${offset}?limit=12`)
    },
    CREATECash(body: any) {
        return RQRequestPOST(`${host}cash/reg/cash/`, body)
    },
    GETCashList() {
        return RQRequestGET(`${host}cash/search/cash/list/?id=1`)
    },
    DELETECash: (id: number) => {
        return fetch(`${host} ${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Autorization': `JWT ${localStorage.getItem(tokenStorage)}`
            }
        }).then(results => results.json())
    }
}