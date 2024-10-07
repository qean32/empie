import { memo } from "react";

type Props = {
    children: any
}
export const CenterPlate = memo(({ children }: Props) => {

    return (
        <div className="centerplate">
            {children}
        </div>
    );
})

type Props_ = {
    children: any
}
export const SmallCenterPlate = memo(({ children }: Props_) => {

    return (
        <div className="smallcenterplate">
            {children}
        </div>
    );
})