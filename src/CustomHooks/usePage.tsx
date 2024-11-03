import { useEffect } from "react";
import useBoolean from "./useBoolean";

export default function () {
    const modal = useBoolean(false)
    const loading = useBoolean(true)

    useEffect(() => {
        setTimeout(() => {
            loading.off()
        }, 800);
    }, [loading])

    return [modal, loading.boolean]
}