import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const OFFERServices = {
    GETOffer: (id?: number | string) => {
        return RQRequestGET(`${host}unification/search/offers/?user=${id}`)
    },
    CREATEOffer: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/offers/`, body)
    },
    GETOfferShort: (offset?: number) => {
        return RQRequestGET(`${host}unification/search/offers/short/?offseet=${offset}`)
    },
    DELETEOffer: (body: any, id: number) => {
        return RQRequestPATCH(`${host}unification/delete/offers/${id}/`, body)
    }
}