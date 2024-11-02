import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { ChatChild } from "../../childrens/pages/main/chat";
import usePage from "../../customHooks/usePage";


export const Chat = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle("чат")

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
                    <Center><ChatChild /></Center>
                    <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
                </>
            </div>
        </>
    );
}