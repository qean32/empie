import useBoolean from "../../customHooks/useBoolean"
import { Loader, LoaderGreen } from "./loader"

type Props = {
    title: string,
    function_: Function
}
export const CustomButton = ({ title, function_ }: Props) => {
    const color = useBoolean(false)
    const fn = () => {
        color.SwapFn()
        function_()

        setTimeout(() => {
            color.SwapFn()
        }, 1000);
    }
    return (
        <button className="btngreen" onClick={fn}>
            <p style={color.boolean ? { opacity: '0' } : {}}>{title}</p>
            {color.boolean && <LoaderGreen />}
        </button>
    );
}

type Props_ = {
    title: string,
    function_: Function
}
export const CustomButtonDisabled = ({ title, function_ }: Props_) => {
    const color = useBoolean(false)
    const fn = () => {
        color.SwapFn()
        function_()

        setTimeout(() => {
            color.SwapFn()
        }, 1000);
    }
    return (
        <button onClick={fn}>
            <p style={color.boolean ? { opacity: '0' } : {}}>{title}</p>
            {color.boolean && <Loader />}
        </button>
    );
}