import { useEffect, useState } from "react";

export default function (ref: any, daley: number = 100) {
    const [boolean, setBoolean] = useState<boolean>()

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: HTMLElement = ref.current

        const fn = () => { if (node.getBoundingClientRect().top < window.innerHeight - daley) { on() } else { off() } }

        node.addEventListener('scroll', fn)

        return function () {
            node.removeEventListener('scroll', fn)
        }
    }, [])

    return boolean
}