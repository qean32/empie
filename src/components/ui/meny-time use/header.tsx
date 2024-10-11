import { EmpieLogo } from "./Logo"
import OnlineHandler from "../one-time use/onlineHandler";
import { useNavigate } from "react-router";
import useBoolean from "../../../customHooks/useBoolean";
import { useContext } from "react";
import { SomeContext } from "../../../context";
import useOneRequest from "../../../customHooks/useRequest";
import { tokenStorage, USERServices } from "../../../services/USERServices";

export const Header = () => {

    const navigate = useNavigate()
    const notification = useBoolean(false)

    const { user }: any = useContext(SomeContext)
    const userinfo = useOneRequest(() => USERServices.GETUser(0, user.user_id), 'userinfo')

    const avaClickHandler = () => {
        if (localStorage.getItem(tokenStorage)) {
            navigate(`/profile/${userinfo.finaldata[0]?.id}`)
        } else {
            navigate('/registration')
        }
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
                    {localStorage.getItem(tokenStorage) ? <p>{userinfo.finaldata[0]?.first_name} {userinfo.finaldata[0]?.last_name}</p> : <p>войти</p>}
                    <div className="headerava" style={{ backgroundImage: `url(${userinfo?.finaldata[0]?.ava})` }}></div>
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