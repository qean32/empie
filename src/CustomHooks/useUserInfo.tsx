import { useContext } from "react"
import { SomeContext } from "../context"
import { USERServices } from "../services/USERServices"
import useRequest from "./useRequest"

export default () => {
    const { user }: any = useContext(SomeContext)
    const userinfo = user != 'no user' ? useRequest(() => USERServices.GETUser(0, user.user_id), ['userinfo']) : null

    return { userinfo: userinfo?.finaldata[0] }
}