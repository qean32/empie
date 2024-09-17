import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useBoolean from "../../customHooks/useBoolean";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightTransferChild } from "../../childrens/rightTransfer";
import { TopTeamChild } from "../../childrens/topTeam";
import { StreamChild } from "../../childrens/stream";

type Props = {
    direction: boolean | string
}
export const News = ({ direction = false }: Props) => {
    const modal = useBoolean(false)
    const { loading } = useContext<any>(SomeContext)

    if (!direction) {
        return (
            <>
                {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
                <Header />
                <div className="main">
                    {loading ? <MainLoader /> :
                        <>
                            <LeftPanel />
                            <div className="center">
                                <CenterPlate><div></div></CenterPlate>
                                <CenterPlate><div></div></CenterPlate>
                                <CenterPlate><div></div></CenterPlate>
                                <CenterPlate><div></div></CenterPlate>
                                <CenterPlate><div></div></CenterPlate>
                            </div>
                            <div>
                                <RightPanel><RightPanelChildren /></RightPanel>
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
                    <LeftPanel />
                    <div className="center">
                        <CenterPlate><div></div></CenterPlate>
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