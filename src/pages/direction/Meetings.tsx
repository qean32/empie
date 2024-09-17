import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { MeetingChild } from "../../childrens/meeting";

type Props = {
}
export const Meetings = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <div className="center">
                            <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                            <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                            <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                            <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                            <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                        </div>
                        <RightPanel><RightPanelChildren /></RightPanel>
                    </>
                }
            </div>
        </>
    );
}