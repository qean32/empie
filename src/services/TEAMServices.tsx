import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"
import { numsrting } from "../models/numsrting"
import { tokenStorage } from "./USERServices"

export const TEAMServices = {
    GETTeam: (offset?: number, id?: numsrting, director: numsrting = '', direction: numsrting = '') => {
        return RQRequestGET(`${host}unification/search/team/?offset=${offset}&id=${id}&director=${director}&direction=${direction}`)
    },
    CREATETeam: (body: any) => {
        return RQRequestPOST(`${host}unification/reg/team/`, body)
    },
    GETTeamShort: (offset: number = 0, direction: numsrting = '', limit: number = 10) => {
        return RQRequestGET(`${host}unification/search/team/short/?offset=${offset}&limit=${limit}&direction=${direction}`)
    },
    UPDATETeam: (body: any, id: number | undefined, file: boolean = false) => {
        return RQRequestPATCH(`${host}unification/update/team/${id}/`, body, file)
    },
    DELETETeam: (id: numsrting) => {
        return fetch(`${host}unification/update/team/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${JSON.parse(localStorage.getItem(tokenStorage) as any).access}`
            }
        })
    }
}