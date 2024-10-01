import { useEffect, useState } from "react";

export default function (ref: any, daley: number = 50) {
    const [boolean, setBoolean] = useState<boolean>(false)

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: HTMLElement = ref.current

        const fn = () => {
            if (node.getBoundingClientRect().top < window.innerHeight - daley) {
                on(); console.log('on', window.innerHeight - daley, node.getBoundingClientRect().top)
            }
            else {
                off(); console.log('off', window.innerHeight - daley, node.getBoundingClientRect().top)
            }
        }

        window.addEventListener('scroll', fn)

        return function () {
            window.removeEventListener('scroll', fn)
        }
    }, [])

    return boolean
}