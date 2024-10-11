import { memo } from "react";


export const RightPanel = memo(({ children }: { children: any }) => {
    return (
        <div className="rightpanel">
            {children}
        </div>
    );
})