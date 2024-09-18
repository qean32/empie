import { EmpieLogo } from "./Logo"
import OnlineHandler from "../one-time use/onlineHandler";
import { useNavigate } from "react-router";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <span style={{ position: 'absolute', right: '20vh' }}><OnlineHandler /></span>
            <div>
                <div onClick={() => navigate('/')}>
                    <EmpieLogo />
                </div>
                <div onClick={() => navigate('/profile/1')}>
                    <p>username</p>
                    <img src="" alt="" className="headerava"/>
                </div>
            </div>
        </header>
    );
}