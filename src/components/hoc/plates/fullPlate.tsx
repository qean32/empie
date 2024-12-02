import { memo } from "react";


export const FullPlate = memo(({ children }: { children: any }) => {

    return (
        <div className="fullplate">
            {children}
        </div>
    );
})