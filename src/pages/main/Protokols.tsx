import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { ProtokolsChild } from "../../childrens/pages/main/protokols";
import usePage from "../../customHooks/usePage";
import { Right } from "../../components/hoc/right";
import { MoveonGridChild } from "../../childrens/other/moveongrid";
import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { RightTransferChild } from "../../childrens/other/rightTransfer";
import { StreamChild } from "../../childrens/other/stream";
import { TopTeamChild } from "../../childrens/other/topTeam";
import { RightPanel } from "../../components/hoc/rightPanel";
import useBoolean from "../../customHooks/useBoolean";


export const Protokols = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('протоколы')

    const modalteams = useBoolean(false)
    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
            {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
            {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel function_={modal.SwapFn} />
                    <Center><ProtokolsChild /></Center>
                    <Right>
                        <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
                        <RightPanel><MoveonGridChild /></RightPanel>
                        <RightPanel><RightTransferChild /></RightPanel>
                        <RightPanel><TopTeamChild /></RightPanel>
                        <RightPanel><StreamChild /></RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}