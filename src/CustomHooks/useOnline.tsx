import { useEffect, useState } from "react";

export default function () {
    const [boolean, setboolean] = useState<boolean>()
    const controller = new AbortController

    useEffect(() => {
        window.addEventListener('online', () => { setboolean(true) }, { signal: controller.signal })
        window.addEventListener('offline', () => { setboolean(false) }, { signal: controller.signal })

        return () => {
            controller.abort()
        }
    }, [])

    return boolean
}