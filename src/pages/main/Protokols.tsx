import { LeftPanel } from "../../components/hoc/leftPanel";
import { Header } from "../../components/ui/meny-time use/header";
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


export const Protokols = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('протоколы')

    return (
        <>
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
                    <Center><ProtokolsChild /></Center>
                    <Right>
                        <RightPanel><RightPanelChildren /></RightPanel>
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