import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { MeetingChild } from "../../childrens/pages/direction/meeting";
import { MoveonGridChild } from "../../childrens/other/moveongrid";
import { RightTransferChild } from "../../childrens/other/rightTransfer";
import { StreamChild } from "../../childrens/other/stream";
import { TopTeamChild } from "../../childrens/other/topTeam";
import useBoolean from "../../customHooks/useBoolean";
import usePage from "../../customHooks/usePage";


export const Meeting = ({ }: {}) => {
    const [modal, loading]: any = usePage()

    const modalteams = useBoolean(false)
    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)

    ChangeTitle('матч')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
            {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
            {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel function_={modal.SwapFn} />
                <Center><MeetingChild /></Center>

                <Right>
                    <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
                    <RightPanel><MoveonGridChild /></RightPanel>
                    <RightPanel><RightTransferChild /></RightPanel>
                    <RightPanel><TopTeamChild /></RightPanel>
                    <RightPanel><StreamChild /></RightPanel>
                </Right>
            </div>
        </>
    )
}