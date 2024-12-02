import { host, tokenStorage } from "../exports"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"

export const OFFERServices = {
    GETOffer: (id?: numsrting) => {
        return RQRequestGET(`${host}unification/search/offers/?user=${id}`)
    },
    GETnewOffer: (id?: numsrting) => {
        return RQRequestGET(`${host}unification/search/offers/${id}/`)
    },
    GETREALTIMEOffer: (id: numsrting, datetime_: string) => {
        return RQRequestGET(`${host}unification/longpoll/offers/${id}/${datetime_}/`)
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
    },
    UPDATEOffer: (id: number, body_: any) => {
        return RQRequestPATCH(`${host}unification/update/offers/${id}/`, body_).then(results => results.json())
    }
}