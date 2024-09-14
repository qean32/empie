import { useCallback, useContext, useState } from "react";
import { Header } from "../../components/ui/meny-time use/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { CenterPlate } from "../../components/big/plates/centerPlate";
import { LeftPanel } from "../../components/big/leftPanel";
import { RightPanel } from "../../components/big/rightPanel";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { Button } from "../../components/ui/meny-time use/customButton";
import { InputComent } from "../../components/ui/one-time use/InterfacePost";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { Modal } from "../../components/ui/meny-time use/modal";

type Props = {

}
export const Test = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const [value, setValue] = useState<any>()

    const clickHandler = useCallback(() => setValue((prev: any) => !prev), [])
    return (
        <>
            {value && <Modal function_={clickHandler}> <ModalDirectionChildren function_={clickHandler} /> </Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel />
                    <div className="center">
                        <CenterPlate>
                            <Button function_={clickHandler} title="click" />
                        </CenterPlate>
                        <CenterPlate>
                            <InputComent value={value} setValue={setValue} title="поиск игрока" />
                        </CenterPlate>
                    </div>
                    <div>
                    <RightPanel>
                        <RightPanelChildren />
                    </RightPanel>
                    </div>
                </div>}
        </>
    );
}