import { useNavigate } from "react-router";
import { memo, useContext } from "react";
import { SomeContext } from "../../../context";
import { useRealTimeRequest } from "../../../customHooks/useRealTimeRequest";

const Notifications = memo(() => {
    const { user }: any = useContext(SomeContext)
    const navigate = useNavigate()
    const notification = useRealTimeRequest()

    return (
        <div onClick={() => user.user_id && navigate('/offers')} style={{ cursor: 'pointer' }}>
            {notification ? <img src="/svg/notification.svg" alt="" /> : <img src="/svg/notificationun.svg" alt="" />}
        </div>
    );
})

export default Notifications;