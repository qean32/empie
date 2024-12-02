import moment from "moment"

export const GetNewTime = () => {
    return moment(new Date().toISOString(), "YYYY-MM-DDTHH:mm:ss.sssZ").format("Y-M-D H:m:ss")
}