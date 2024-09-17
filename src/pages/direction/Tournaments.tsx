import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useBoolean from "../../customHooks/useBoolean";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { TournamentChild } from "../../childrens/tournament";

type Props = {
}
export const Tournaments = ({ }: Props) => {
    const modal = useBoolean(false)
    const { loading } = useContext<any>(SomeContext)
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel />
                        <div className="center">
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                        </div>
                        <RightPanel><RightPanelDirectionChildren /></RightPanel>
                    </>
                }
            </div>
        </>
    );
}