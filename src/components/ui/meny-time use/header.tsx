import { EmpieLogo } from "./Logo"
import OnlineHandler from "../one-time use/onlineHandler";
import { useNavigate } from "react-router";
import useBoolean from "../../../customHooks/useBoolean";

export const Header = () => {

    const navigate = useNavigate()
    const notification = useBoolean(false)

    const avaClickHandler = () => {
        if (localStorage.getItem('token')) {
            navigate('/profile/2')
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
                    {localStorage.getItem('token') ? <p>username</p> : <p>войти</p>}
                    <div className="headerava"></div>
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