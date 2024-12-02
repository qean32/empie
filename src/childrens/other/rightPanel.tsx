import { createPortal } from "react-dom"
import { useNavigate } from "react-router"
import { Modal } from "../../components/hoc/modal"
import { ModalDirectionChildren } from "./modalDirection"
import useBoolean from "../../customHooks/useBoolean"


export const RightPanelChildren = () => {
    const navigate = useNavigate()

    const modalteams = useBoolean(false)
    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)

    return (
        <div className="rightcontainer">
            {modalteams.boolean && createPortal(
                <Modal function_={modalteams.SwapFn}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>,
                document.body
            )}
            {modalmeetings.boolean && createPortal(
                <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>,
                document.body
            )}
            {modaltournaments.boolean && createPortal(
                <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>,
                document.body
            )}
            <div className="rightpanellink" onClick={() => modaltournaments.on()}>турниры</div>
            <div className="rightpanellink" onClick={() => navigate(`/community`)}>игроки</div>
            <div className="rightpanellink" onClick={() => modalteams.on()}>команды</div>
            <div className="rightpanellink" onClick={() => navigate(`/protokols`)}>протоколы</div>
            <div className="rightpanellink" onClick={() => modalmeetings.on()}>матчи</div>
        </div>
    );
}


export const RightPanelDirectionChildren = ({ direction }: { direction: number }) => {
    const navigate = useNavigate()

    return (
        <div className="rightcontainer">
            <div className="rightpanellink" onClick={() => navigate(`/tournaments/${direction}`)}>турниры</div>
            <div className="rightpanellink" onClick={() => navigate(`/meetings/${direction}`)}>матчи</div>
            <div className="rightpanellink" onClick={() => navigate(`/direction/${direction}`)}>новости</div>
            <div className="rightpanellink" onClick={() => navigate(`/community`)}>игроки</div>
            <div className="rightpanellink" onClick={() => navigate(`/transfers/`)}>трансферы</div>
            <div className="rightpanellink" onClick={() => navigate(`/teams/${direction}`)}>команды</div>
        </div>
    );
}