import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { CashChild } from "../../childrens/pages/main/cash";
import usePage from "../../customHooks/usePage";
import CashRight from "../../childrens/other/right/cashRight";


export const Cash = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('расходы')

    return (
        <>
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
                    <Center><CashChild /></Center>
                    <Right><CashRight /></Right>
                </>
            </div>
        </>
    );
}