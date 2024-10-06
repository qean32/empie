import { memo } from "react";

type Props = {
    children: any
}
export const Right = memo(({ children }: Props) => {
    return (
        <div className="right">
            {children}
        </div>
    );
})