import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { OffersChild } from "../../childrens/pages/main/offers";
import usePage from "../../customHooks/usePage";


export const Offers = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('приглашения')

    return (
        <>
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <LeftPanel />
                <Center><OffersChild /></Center>
                <Right><RightPanel><RightPanelChildren /></RightPanel></Right>
            </div>
        </>
    );
}