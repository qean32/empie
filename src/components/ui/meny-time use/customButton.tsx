import useBoolean from "../../../customHooks/useBoolean"
import { Loader, LoaderWhite } from "./loader"


export const Button = ({ title, function_ }: {
    title: string,
    function_: Function
}) => {
    const color = useBoolean(false)
    const fn = (e: any) => {
        e.preventDefault()
        color.SwapFn()

        setTimeout(() => {
            color.SwapFn()
            function_()
        }, 700);
    }
    return (
        <button className="btngreen" onClick={fn} type="submit">
            <p style={color.boolean ? { opacity: '0' } : {}}>{title}</p>
            {color.boolean && <LoaderWhite />}
        </button>
    );
}


export const ButtonDisabled = ({ title, function_ }: {
    title: string,
    function_: Function
}) => {
    const color = useBoolean(false)
    const fn = (e: any) => {
        e.preventDefault()
        color.SwapFn()

        setTimeout(() => {
            color.SwapFn()
            function_()
        }, 700);
    }
    return (
        <button onClick={fn} type="submit">
            <p style={color.boolean ? { opacity: '0' } : {}}>{title}</p>
            {color.boolean && <Loader />}
        </button>
    );
}