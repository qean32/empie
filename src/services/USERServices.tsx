import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const tokenStorage: any = 'tokenStorage'

export const USERServices = {
    GETUser(offset?: number, id: number | string = '') {
        return RQRequestGET(`${host}users/search/?id=${id}&offset=${offset}`)
    },
    GETUsersShort(offset?: number) {
        return RQRequestGET(`${host}users/search/short/?offset=${offset}`)
    },
    CREATEUser(body: any) {
        return RQRequestPOST(`${host}users/reg/`, body, false)
    },
    UPDATEUser: (body: any, id: number) => {
        return RQRequestPATCH(`${host}update/user/${id}/`, body)
    },
    REFRESHUser: () => {
        const token: any = JSON.parse(localStorage.getItem(tokenStorage) as string)
        return fetch(`${host}users/token/refresh/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh: token.refresh })
        }).then(results => results.json()).then(results => localStorage.setItem(tokenStorage, JSON.stringify(results)))
    },
    ACCESSUser: (body: any) => {
        return fetch(`${host}users/token/access/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(results => results.json()).then(results => localStorage.setItem(tokenStorage, JSON.stringify(results)))
    },
    LOGOUTUser: () => {
        localStorage.removeItem(tokenStorage)
    }
}