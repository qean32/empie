import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelDirectionChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { MeetingChild } from "../../childrens/pages/direction/meeting";


export const Meeting = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)

    ChangeTitle('матч')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel function_={modal.SwapFn} />
                <Center><MeetingChild /></Center>
                <Right><RightPanel><RightPanelDirectionChildren direction={0} /></RightPanel></Right>
            </div>
        </>
    )
}