import { useNavigate } from "react-router";
import { memo, useContext, useEffect, useState } from "react";
import { SomeContext } from "../../../context";
import { host } from "../../../exports";
// import { useRealTimeRequest } from "../../../customHooks/useRealTimeRequest";

const Notifications = memo(() => {
    const { user }: any = useContext(SomeContext)
    const navigate = useNavigate()
    // const [notification]: any = user?.user_id ? useRealTimeRequest(`unification/longpoll/offers/${user?.user_id}`) : []

    const [notification, setNotification] = useState<boolean>(false)
    const getNotification = async () => {
        const response = await fetch(`${host}unification/search/offers/${user.user_id}/`)
        const data = await response.json()
        data.data.length > 0 && setNotification(true)
    }
    useEffect(() => {
        !notification || user != 'no user' && getNotification()
        const interval = setInterval(() => {
            !notification || user != 'no user' && getNotification()
        }, 20000);

        return () => clearInterval(interval)
    })

    return (
        <div onClick={() => user.user_id && navigate('/offers')} style={{ cursor: 'pointer' }} title="приглашения">
            {notification ? <img src="/svg/notification.svg" alt="" /> : <img src="/svg/notificationun.svg" alt="" />}
        </div>
    );
})

export default Notifications;