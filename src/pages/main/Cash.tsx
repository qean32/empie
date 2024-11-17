import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { CashChild } from "../../childrens/pages/main/cash";
import usePage from "../../customHooks/usePage";
import CashRight from "../../childrens/other/right/cashRight";


export const Cash = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('расходы')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel function_={modal.SwapFn} />
                    <Center><CashChild /></Center>
                    <Right><CashRight /></Right>
                </>
            </div>
        </>
    );
}