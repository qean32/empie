import { host, tokenStorage } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"

export const CASHServices = {
    GETCash(offset?: number) {
        return RQRequestGET(`${host}cash/search/cash/?offset=${offset}?limit=12`)
    },
    CREATECash(body: any) {
        return RQRequestPOST(`${host}cash/reg/cash/`, body)
    },
    GETBudget() {
        return RQRequestGET(`${host}cash/search/budget/?id=1`)
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