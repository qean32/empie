import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { TransfersChild } from "../../childrens/pages/main/transfers";
import usePage from "../../customHooks/usePage";


export const Transfers = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('трансферы')

    return (
        <>
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
                    <Center><TransfersChild /></Center>
                    <Right><RightPanel><RightPanelChildren /></RightPanel></Right>
                </>
            </div>
        </>
    );
}