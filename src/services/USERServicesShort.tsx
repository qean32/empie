import { host } from "../Functions/GiveConst"
import RQRequestGET from "../Functions/RQRequestGET"

export const USERServices = {
    GETUsersShort(offset: number) {
        RQRequestGET(`${host}/...${offset}`)
    },
    GETUserShort(id: number) {
        RQRequestGET(`${host}/...${id}`)
    },
}