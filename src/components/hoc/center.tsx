import { memo } from "react";


export const Center = memo(({ children }: { children: any }) => {
    return (
        <div className="center">
            {children}
        </div>
    );
})