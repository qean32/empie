import { useCallback } from "react"
import { Cross } from "../components/ui/cross"

type Props = {
    link?: string
    function_: React.MouseEventHandler<HTMLSpanElement>
}
export const ModalDirection = ({ link = '', function_ }: Props) => {
    return (
        <div className="modalDirection">
            <span style={{ position: 'absolute', right: '2vh', top: '1vh' }} onClick={function_}>
                <Cross />
            </span>
            <div style={{ border: 'none' }}></div>
            <div></div>
            <div></div>
            <div><img src="/svg/dota.svg" alt="" className="transition07" /> <p className="transition03">DOTA</p> </div>
        </div>
    );
}