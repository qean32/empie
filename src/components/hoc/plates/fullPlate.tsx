import { memo } from "react";

type Props = {
    children: any
}
export const FullPlate = memo(({ children }: Props) => {

    return (
        <div className="fullplate">
            {children}
        </div>
    );
})