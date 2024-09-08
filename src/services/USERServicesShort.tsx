import { host } from "../functions/GiveConst"
import RQRequestGET from "../functions/RQRequestGET"

export const USERServices = {
    GETUsersShort(offset: number) {
        RQRequestGET(`${host}/...${offset}`)
    },
    GETUserShort(id: number) {
        RQRequestGET(`${host}/...${id}`)
    },
}