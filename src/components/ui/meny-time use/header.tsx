import { EmpieLogo } from "./Logo"
import OnlineHandler from "../one-time use/onlineHandler";
import { useNavigate } from "react-router";
import useBoolean from "../../../customHooks/useBoolean";
import useUserInfo from "../../../customHooks/useUserInfo";
import { tokenStorage } from "../../../exports";

export const Header = () => {

    const navigate = useNavigate()
    const notification = useBoolean(false)
    const { userinfo }: any = useUserInfo()

    const avaClickHandler = () => {
        localStorage.getItem(tokenStorage) ?
            navigate(`/profile/${userinfo?.id}`)
            :
            navigate('/registration')
    }

    return (
        <header>
            <span style={{ position: 'absolute', right: '20vh' }} onClick={() => navigate('/test')}><OnlineHandler /></span>
            <div>
                <div>
                    <span onClick={() => navigate('/')}>
                        <EmpieLogo />
                    </span>
                    <div onClick={() => navigate('/offers')} style={{ cursor: 'pointer' }}>
                        {notification.boolean ? <img src="/svg/notification.svg" alt="" /> : <img src="/svg/notificationun.svg" alt="" />}
                    </div>
                </div>
                <div onClick={avaClickHandler} style={{ cursor: 'pointer' }}>
                    {localStorage.getItem(tokenStorage) ?
                        <p>{userinfo?.first_name} {userinfo?.last_name}</p>
                        :
                        <p>войти</p>}
                    <div className="headerava" style={{ backgroundImage: `url(${userinfo?.ava})` }}></div>
                </div>
            </div>
        </header>
    );
}


export const FakeHeader = () => {
    return (
        <header>
            <span style={{ position: 'absolute', right: '20vh' }}><OnlineHandler /></span>
            <div>
                <div>
                    <span>
                        <EmpieLogo />
                    </span>
                    <img src="/svg/notificationun.svg" alt="" />
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <p>username</p>
                    <div className="headerava"></div>
                </div>
            </div>
        </header>
    );
}