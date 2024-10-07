import { memo } from "react";

type Props = {
    children: any
}
export const RightPanel = memo(({ children }: Props) => {
    return (
        <div className="rightpanel">
            {children}
        </div>
    );
})