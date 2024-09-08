import { useState } from "react";

export default function (defaultValue: boolean) {
    const [boolean, setBoolean] = useState<boolean>(defaultValue)

    const SwapFn = () => {
        setBoolean(prev => !prev)
    }

    return [boolean, SwapFn]
}