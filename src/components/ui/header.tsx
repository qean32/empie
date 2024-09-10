import { EmpieLogo } from "./Logo"

export const Header = () => {
    return (
        <header>
            <span></span>
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