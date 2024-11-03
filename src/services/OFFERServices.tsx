import { host, tokenStorage } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const OFFERServices = {
    GETOffer: (id?: numsrting) => {
        return RQRequestGET(`${host}unification/search/offers/?user=${id}`)
    },
    CREATEOffer: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/offers/`, body)
    },
    GETOfferShort: (offset?: number) => {
        return RQRequestGET(`${host}unification/search/offers/short/?offseet=${offset}`)
    },
    DELETEOffer: (id: number) => {
        return fetch(`${host}unification/update/offers/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Autorization': `JWT ${localStorage.getItem(tokenStorage)}`
            }
        }).then(results => results.json())
    }
}