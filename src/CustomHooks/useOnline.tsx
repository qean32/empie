import { useEffect, useState } from "react";

export default function () {
    const [boolean, setboolean] = useState<boolean>()

    useEffect(() => {
        window.addEventListener('online', () => { setboolean(true) })
        window.addEventListener('offline', () => { setboolean(false) })

        return () => {
            window.removeEventListener('online', () => { setboolean(true) })
            window.removeEventListener('offline', () => { setboolean(false) })
        }
    }, [])

    return boolean
}