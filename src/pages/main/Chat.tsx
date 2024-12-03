import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/hoc/modal";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { ChatChild } from "../../childrens/pages/main/chat";
import usePage from "../../customHooks/usePage";
import { useContext } from "react";
import UserWasHereModal from "../../components/ui/one-time use/userwashere";
import { SomeContext } from "../../context";


export const Chat = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    const { modalregistration }: any = useContext(SomeContext)
    ChangeTitle("чат")

    return (
        <>
            {modalregistration.boolean && <Modal function_={modalregistration.SwapFn}><UserWasHereModal modalregistration={modalregistration} /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
                    <Center><ChatChild /></Center>
                    <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
                </>
            </div>
        </>
    );
}