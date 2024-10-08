import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { RegTeamChild } from "../../childrens/pages/direction/regTeam";

type Props = {

}
export const RegTeam = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('редактор команды')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
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