import { useCallback, useContext, useState } from "react";
import { Header } from "../../components/ui/meny-time use/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { CenterPlate, SmallCenterPlate } from "../../components/big/plates/centerPlate";
import { LeftPanel } from "../../components/big/leftPanel";
import { RightPanel } from "../../components/big/rightPanel";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { Button } from "../../components/ui/meny-time use/customButton";
import { InputComent } from "../../components/ui/one-time use/InterfacePost";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { Modal } from "../../components/ui/meny-time use/modal";
import { InputDate, InputTime } from "../../components/ui/meny-time use/customInput";

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
                            <div className="user-conteiner">
                                <div><div className="ava"></div><p>username</p></div>
                                {/* in component this div */}
                                <span>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </span>
                            </div>
                        </CenterPlate>
                        <SmallCenterPlate>
                            <div>
                                <div className="teamvstam">
                                    <p>zxcclown</p> <div><p>2:40</p><img src="" alt="" /></div><p>RAKUZAN</p>
                                </div>
                                <div className="aboutmeet">
                                    <p>04.04.24 квалификация</p>
                                    <p>b03</p>
                                </div>
                            </div>
                        </SmallCenterPlate>
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