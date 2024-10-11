import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { TeamChild } from "../../childrens/pages/direction/team";


export const Team = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('команда')
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
                    <Center><TeamChild /></Center>
                    <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
                </>
            </div>
        </>
    );
}