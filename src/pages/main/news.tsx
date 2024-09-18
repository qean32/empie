import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightTransferChild } from "../../childrens/rightTransfer";
import { TopTeamChild } from "../../childrens/topTeam";
import { StreamChild } from "../../childrens/stream";
import useBoolean from "../../customHooks/useBoolean";

type Props = {
    direction: boolean | string
}
export const News = ({ direction = false }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)



    if (!direction) {
        return (
            <>
                {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
                {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
                {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
                {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
                <Header />
                <div className="main">
                    {loading ? <MainLoader /> :
                        <>
                            <LeftPanel function_={modal.SwapFn} />
                            <div className="center">
                                <SmallCenterPlate><div></div></SmallCenterPlate>
                                <SmallCenterPlate><div></div></SmallCenterPlate>
                                <SmallCenterPlate><div></div></SmallCenterPlate>
                                <SmallCenterPlate><div></div></SmallCenterPlate>
                                <SmallCenterPlate><div></div></SmallCenterPlate>
                            </div>
                            <div>
                                <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn2={modalmeetings.on} fn3={modalmeetings.on} /></RightPanel>
                                <RightPanel><StreamChild /></RightPanel>
                            </div>
                        </>
                    }
                </div>
            </>
        );
    }

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <div className="center">
                        <SmallCenterPlate><div></div></SmallCenterPlate>
                    </div>
                    <div>
                        <RightPanel><RightPanelDirectionChildren /></RightPanel>
                        <RightPanel><TopTeamChild /></RightPanel>
                        <RightPanel><RightTransferChild /></RightPanel>
                        <RightPanel><StreamChild /></RightPanel>
                    </div>
                </div>}
        </>
    )
}