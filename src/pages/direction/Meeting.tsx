import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { MeetingChild } from "../../childrens/pages/direction/meeting";
import { MoveonGridChild } from "../../childrens/other/moveongrid";
import { RightTransferChild } from "../../childrens/other/rightTransfer";
import { StreamChild } from "../../childrens/other/stream";
import { TopTeamChild } from "../../childrens/other/topTeam";
import usePage from "../../customHooks/usePage";


export const Meeting = ({ }: {}) => {
    const [{}, loading]: any = usePage()
    ChangeTitle('матч')

    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel />
                <Center><MeetingChild /></Center>

                <Right>
                    <RightPanel><RightPanelChildren /></RightPanel>
                    <RightPanel><MoveonGridChild /></RightPanel>
                    <RightPanel><RightTransferChild /></RightPanel>
                    <RightPanel><TopTeamChild /></RightPanel>
                    <RightPanel><StreamChild /></RightPanel>
                </Right>
            </div>
        </>
    )
}