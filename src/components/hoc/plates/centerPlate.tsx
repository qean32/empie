import { memo } from "react";


export const CenterPlate = memo(({ children }: { children: any }) => {

    return (
        <div className="centerplate">
            {children}
        </div>
    );
})


export const SmallCenterPlate = memo(({ children }: { children: any }) => {

    return (
        <div className="smallcenterplate">
            {children}
        </div>
    );
})