import { EmpieLogo } from "./Logo"
import OnlineHandler from "../one-time use/onlineHandler";

export const Header = () => {
    return (
        <header>
            <span style={{position: 'absolute', right: '20vh'}}><OnlineHandler /></span>
            <div>
                <EmpieLogo />
                <div>
                    <p>username</p>
                    <div className="headerava"></div>
                </div>
            </div>
        </header>
    );
}