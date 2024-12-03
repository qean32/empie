import { memo } from "react";


export const Right = memo(({ children }: { children: any }) => {
    return (
        <div className="right">
            {children}
        </div>
    );
})