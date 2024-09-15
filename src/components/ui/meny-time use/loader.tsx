import { useEffect, useState } from "react";
import { positioncenterbyabsolute } from "../../../functions/GiveConst";
import { EmpieLogo } from "./Logo";
import useBoolean from "../../../customHooks/useBoolean";

export const MainLoader = () => {
    const [points, setPoints] = useState<string>('...')
    const up = useBoolean(false)

    useEffect(() => {
        const int = setInterval(() => {
            if (up.boolean) { setPoints(prev => prev + '.') }
            if (!up.boolean) { setPoints(prev => prev.slice(0, -1)) }
            if (points == '.') { up.on(); return }
            if (points == '..') { up.off(); return }
        }, 500)

        return () => {
            clearInterval(int)
        }
    }, [points])
    return (
        <>
            <div style={{ ...positioncenterbyabsolute, top: '37%' }} className="mainloader">
                <div className="dropswadow">
                    <EmpieLogo size={8.6} />
                    <p style={{ position: 'absolute', bottom: '-45px', left: '3px' }}>загрузка{points}</p>
                </div>
            </div>
        </>
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