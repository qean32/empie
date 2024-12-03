import { useEffect, useState } from "react";

export default function (defaultValue: any, daley: number = 400) {
    const [debounsedValue, setDebousedValue] = useState<any>(defaultValue)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebousedValue(defaultValue)
        }, daley)

        return () => clearTimeout(timeOut)
    }, [defaultValue, daley])

    return debounsedValue
}