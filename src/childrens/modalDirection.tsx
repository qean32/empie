import { useCallback } from "react"
import { Cross } from "../components/ui/meny-time use/cross"

type Props = {
    link?: string
    function_: React.MouseEventHandler<HTMLSpanElement>
}
export const ModalDirectionChildren = ({ link = '', function_ }: Props) => {
    return (
        <div className="modalDirection">
            <span style={{ position: 'absolute', right: '2vh', top: '1vh' }} onClick={function_}>
                <Cross />
            </span>
            <div style={{ border: 'none' }}><img src="/svg/bascketball.svg" alt="" className="transition07" /> <p className="transition03">баскетбол</p></div>
            <div><img src="/svg/cs.svg" alt="" className="transition07" /> <p className="transition03">CS</p></div>
            <div></div>
            <div><img src="/svg/dota.svg" alt="" className="transition07" /> <p className="transition03">DOTA</p> </div>
        </div>
    );
}