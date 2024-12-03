import { useContext } from "react";
import { SomeContext } from "../context";
import useUserInfo from "../customHooks/useUserInfo";

export default function(function_: Function, value: any = true) {
    // it`s no work.. invalid hook call, mb fix?
    const { modalregistration }: any = useContext(SomeContext)
    const { userinfo }: any = useUserInfo()

    if (userinfo)
        value && function_()
    else
        modalregistration.on()
}