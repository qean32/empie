import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const USERServices = {
    GETUser(offset?: number, id?: number | string) {
        return RQRequestGET(`${host}users/search/?id=${id}&offset=${offset}`)
    },
    GETUsersShort(offset?: number) {
        return RQRequestGET(`${host}users/search/short/?offset=${offset}`)
    },
    CREATEUser(body: any) {
        return RQRequestPOST(`${host}users/reg/`, {
            method: 'POST',
            headers: {
                'Cross-Origin-Opener-Policy' : 'same-origin',
                'Content-Length' : '<calculated when request is sent>'
            },
            body: JSON.stringify(body)
        })
    },
    UPDATEUser: (body: any, id: number) => {
        return RQRequestPATCH(`${host}update/user/${id}/`, body)
    },
    REFRESHUser: (body: any) => {
        return RQRequestPATCH(`${host}users/token/refresh/`, body)
    },
    ACCESSUser: (body: any) => {
        return RQRequestPATCH(`${host}users/token/access/`, body)
    },
}