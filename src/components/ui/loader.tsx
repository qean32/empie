import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { EmpieLogo } from "./Logo";

export const MainLoader = () => {
    return (
        <div style={{ ...positioncenterbyabsolute, top: '35%' }}>
            <div className="mainloader"></div>
            <EmpieLogo size={10}/>
        </div>
    );
}

export const Loader = () => {
    return (
        <div style={{ transform: 'translate(-1vh, -2.4vh)' }}>
            <span className="loader"></span>
        </div>
    )
}

export const LoaderGreen = () => {
    return (
        <div style={{ transform: 'translate(-1vh, -2.4vh)' }}>
            <span className="loader loaderGreen"></span>
        </div>
    )
}