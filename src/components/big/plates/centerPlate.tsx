import { useState } from "react";

type Props = {
    children: any
}
export const CenterPlate = ({ children }: Props) => {

    return (
        <div className="centerplate">
            {children}
            <div className="under-color"></div>
        </div>
    );
}