import { useNavigate } from "react-router";
import { memo, useContext } from "react";
import { SomeContext } from "../../../context";
// import { useRealTimeRequest } from "../../../customHooks/useRealTimeRequest";

const Notifications = memo(() => {
    const { user }: any = useContext(SomeContext)
    const navigate = useNavigate()
    // const [notification]: any = user?.user_id ? useRealTimeRequest(`unification/longpoll/offers/${user?.user_id}`) : []
    // const [notification]: any = useRealTimeRequest(`unification/longpoll/offers/1`)
    const notification: any = []

    return (
        <div onClick={() => user.user_id && navigate('/offers')} style={{ cursor: 'pointer' }} title="приглашения">
            {notification && notification.length > 0 ? <img src="/svg/notification.svg" alt="" /> : <img src="/svg/notificationun.svg" alt="" />}
        </div>
    );
})

export default Notifications;