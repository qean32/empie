import useBoolean from "../../../customHooks/useBoolean"
import { Loader, LoaderWhite } from "./loader"

type Props = {
    title: string,
    function_: Function
}
export const Button = ({ title, function_ }: Props) => {
    const color = useBoolean(false)
    const fn = () => {
        color.SwapFn()

        setTimeout(() => {
            color.SwapFn()
            function_()
        }, 700);
    }
    return (
        <button className="btngreen" onClick={fn}>
            <p style={color.boolean ? { opacity: '0' } : {}}>{title}</p>
            {color.boolean && <LoaderWhite />}
        </button>
    );
}

type Props_ = {
    title: string,
    function_: Function
}
export const ButtonDisabled = ({ title, function_ }: Props_) => {
    const color = useBoolean(false)
    const fn = () => {
        color.SwapFn()

        setTimeout(() => {
            color.SwapFn()
            function_()
        }, 700);
    }
    return (
        <button onClick={fn}>
            <p style={color.boolean ? { opacity: '0' } : {}}>{title}</p>
            {color.boolean && <Loader />}
        </button>
    );
}