import { useCallback, useContext, useState } from "react";
import { Header } from "../../components/ui/meny-time use/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { CenterPlate, SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { RightPanelChildren } from "../../childrens/rightPanel";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { Modal } from "../../components/ui/meny-time use/modal";
import { TopTeamChild } from "../../childrens/topTeam";
import { StreamChild } from "../../childrens/stream";
import { RightTransferChild } from "../../childrens/rightTransfer";
import { TournamentChild } from "../../childrens/tournament";
import { MeetingChild } from "../../childrens/meeting";
import { InlineTeam, InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";

type Props = {

}
export const Test = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const [value, setValue] = useState<any>()

    const clickHandler = useCallback(() => setValue((prev: any) => !prev), [])
    return (
        <>
            {value && <Modal function_={clickHandler}> <ModalDirectionChildren function_={clickHandler} /> </Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel />
                    <div className="center">
                        <CenterPlate><InlineUser /></CenterPlate>
                        <CenterPlate><InlineTeam /></CenterPlate>
                        <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                        <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                    </div>
                    <div>
                        <RightPanel><RightPanelChildren /></RightPanel>
                        <RightPanel><RightTransferChild /></RightPanel>
                        <RightPanel><TopTeamChild /></RightPanel>
                        <RightPanel><StreamChild /></RightPanel>
                    </div>
                </div>}
        </>
    );
}