import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";

type Props = {

}
export const Chat = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle("расходы")
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <Center>
                            <CenterPlate>
                                <div className="dftcontainer">
                                    <div></div>
                                    <div></div>
                                    {/* {использовать тот же интерфей что у комантария!!! (через компонент)} */}
                                </div>
                            </CenterPlate>
                        </Center>
                        <Right>
                            <RightPanel><></></RightPanel>
                        </Right>
                    </>
                }
            </div>
        </>
    );
}