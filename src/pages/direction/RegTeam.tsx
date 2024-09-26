import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { InputFile, InputText } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { Button } from "../../components/ui/meny-time use/customButton";

type Props = {

}
export const RegTeam = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('редактор команды')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ minHeight: '500px', justifyContent: 'start', padding: '40px 0' }}>
                                <div className="edit">
                                    <div>
                                        <InputText title={"название"} value={""} setValue={() => undefined} max={0} width={32} />
                                    </div>

                                    <div>
                                        <InputText title={"статус"} value={""} setValue={() => undefined} max={0} width={32} />
                                    </div>

                                    <span>
                                        <InputFile setValue={() => undefined} title="фон команды" />
                                        <InputFile setValue={() => undefined} title="изображение команды" />
                                    </span>

                                    <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                                        <Button title="сохранить" function_={() => undefined} />
                                    </div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <Right>
                        <RightPanel><div className="dftcontainer"></div></RightPanel>
                    </Right>
                </div>}
        </>
    );
}