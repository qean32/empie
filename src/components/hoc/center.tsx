import { memo } from "react";

type Props = {
    children: any
}
export const Center = memo(({ children }: Props) => {
    return (
        <div className="center">
            {children}
        </div>
    );
})