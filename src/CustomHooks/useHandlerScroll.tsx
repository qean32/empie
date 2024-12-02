import { useEffect, useState } from "react";

export default function (ref: any, daley: number = 200) {
    const [boolean, setBoolean] = useState<boolean>(false)
    const controller = new AbortController

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: HTMLElement = ref.current

        const fn = () => {
            node.getBoundingClientRect().top < window.innerHeight + daley ?
                on()
                :
                off()
        }

        window.addEventListener('scroll', fn, { signal: controller.signal })

        return function () {
            controller.abort()
        }

    }, [])

    return boolean
}