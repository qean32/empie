import { useState } from "react";

export default function (defaultValue: boolean) {
    const [boolean, setBoolean] = useState<boolean>(defaultValue)

    const SwapFn = () => {
        setBoolean(prev => !prev)
    }

    const on = () => {
        setBoolean(true)
    }

    const off = () => {
        setBoolean(false)
    }

    return { boolean, SwapFn: SwapFn, on: on, off: off}
}