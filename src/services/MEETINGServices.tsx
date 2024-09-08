import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"
import RQRequestPATCH from "../functions/RQRequestPATCH"
import RQRequestPOST from "../functions/RQRequestPOST"

export const MEETINGServices = {
    GETMeetings: (offset: number) => {
        RQRequestGET(`${offset} ${host}`)
    },
    CREATEMeeting: (body: any) => {
        RQRequestPOST(`${host}`, body)
    },
    GETMeeting: (id: number) => {
        RQRequestGET(`${host} ${id}`)
    },
    UPDATEMeeting: (body: any, id: number) => {
        RQRequestPATCH(`${host} ${id}`, body)
    }
}