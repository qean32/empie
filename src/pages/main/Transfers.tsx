import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useBoolean from "../../customHooks/useBoolean";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";

type Props = {

}
export const Transfers = ({ }: Props) => {
    const modal = useBoolean(false)
    const { loading } = useContext<any>(SomeContext)

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel />
                        <div className="center">
                            <CenterPlate>
                                <div className="transfers">
                                    <Transfer />
                                    <Transfer />
                                    <Transfer />
                                    <Transfer />
                                    <Transfer />
                                    <Transfer />
                                    <Transfer />
                                </div>
                            </CenterPlate>
                        </div>
                        <RightPanel><RightPanelChildren /></RightPanel>
                    </>
                }
            </div>
        </>
    );
}

interface Props_ {

}
const Transfer = ({ }: Props_) => {
    return (
        <div className="transfer"><i>Сашка Бирюков</i> покинул команду <i>Астартес</i></div>
    )
}