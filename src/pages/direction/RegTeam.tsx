import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { RegTeamChild } from "../../childrens/pages/direction/regTeam";
import usePage from "../../customHooks/usePage";
import { useContext } from "react";
import UserWasHereModal from "../../components/ui/one-time use/userwashere";
import { SomeContext } from "../../context";


export const RegTeam = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('редактор команды')
    const { modalregistration }: any = useContext(SomeContext)

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalregistration.boolean && <Modal function_={modalregistration.SwapFn}><UserWasHereModal modalregistration={modalregistration} /></Modal>}
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel function_={modal.SwapFn} />
                <Center><RegTeamChild /></Center>
                <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
            </div>
        </>
    );
}