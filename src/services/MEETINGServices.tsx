import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"
import RQRequestPATCH from "../Functions/RQRequestPATCH"
import RQRequestPOST from "../Functions/RQRequestPOST"

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