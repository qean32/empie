import { host, tokenStorage } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const CASHServices = {
    GETCash(offset?: number) {
        return RQRequestGET(`${host}cash/search/cash/?offset=${offset}&limit=18`)
    },
    CREATECash(body: any) {
        return RQRequestPOST(`${host}cash/reg/cash/`, body)
    },
    GETBudget() {
        return RQRequestGET(`${host}cash/search/budget/?id=1`)
    },
    UPDATEBudget(body_: any) {
        return RQRequestPATCH(`${host}cash/update/budget/1/`, body_)
    },
    DELETECash: (id: number) => {
        return fetch(`${host}cash/delete/cash/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as any).access}`
            }
        }).then(results => results.json())
    }
}