import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { EditTeamChild } from "../../childrens/pages/direction/editTeam";
import usePage from "../../customHooks/usePage";


export const EditTeam = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('редакторо команды')

    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel />
                <Center><EditTeamChild /></Center>
                <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
            </div>
        </>
    );
}