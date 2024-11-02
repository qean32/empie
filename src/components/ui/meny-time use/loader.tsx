import { useEffect, useState } from "react";
import { positioncenterbyabsolute } from "../../../exports";
import { EmpieLogo } from "./Logo";
import useBoolean from "../../../customHooks/useBoolean";

export const MainLoader = () => {
    const [points, setPoints] = useState<string>('.')
    const up = useBoolean(false)

    useEffect(() => {
        const interval = setInterval(() => {
            up.boolean && setPoints(prev => prev + '.')
            !up.boolean && setPoints(prev => prev.slice(0, -1))
            if (points == '.') { up.on(); return }
            if (points == '..') { up.off(); return }
        }, 200)

        return () => {
            clearInterval(interval)
        }
    }, [points])
    return (
        <>
            <div style={{ position: 'fixed', backgroundColor: '#24242490', inset: '0', zIndex: '10', animation: 'none', backdropFilter: 'blur(10px)' }} className="shadow">
                <div style={{ ...positioncenterbyabsolute, top: '37%' }} className="mainloader">
                    <div className="dropswadow">
                        <EmpieLogo size={8.6} />
                    </div>
                    <p style={{ position: 'absolute', bottom: '-65px', width: '82px' }}>загрузка{points}</p>
                </div>
            </div>
        </>
    );
}

export const Loader = () => {
    return (
        <div className="adaptiveloader">
            <span className="loader"></span>
        </div>
    )
}

export const LoaderWhite = () => {
    return (
        <div className="adaptiveloader">
            <span className="loader loaderWhite"></span>
        </div>
    )
}