import { Cross } from "../../components/ui/meny-time use/cross"
import { useNavigate } from "react-router"
import { idDirection } from "../../exports"


export const ModalDirectionChildren = ({ link = '', function_ }: {
    link?: string
    function_: React.MouseEventHandler<HTMLSpanElement>
}) => {
    const navigate = useNavigate()

    const navigate_ = (id: number) => {
        if (link)
            return `/${link}/${id}`
        return `/direction/${id}`
    }

    return (
        <div className="modalDirection">
            <span style={{ position: 'absolute', right: '2vh', top: '1vh' }} onClick={function_}>
                <Cross />
            </span>
            <div style={{ border: 'none' }}><img src="/svg/bascketball.svg" alt="" className="transition07" /> <p className="transition03">баскетбол</p></div>
            <div onClick={() => navigate(navigate_(idDirection.cs))}><img src="/svg/cs.svg" alt="" className="transition07" /> <p className="transition03">CS</p></div>
            <div ></div>
            <div onClick={() => navigate(navigate_(idDirection.dota))}><img src="/svg/dota.svg" alt="" className="transition07" /> <p className="transition03">DOTA</p> </div>
        </div>
    );
}