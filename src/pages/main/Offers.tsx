import { useContext, useEffect, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import useBoolean from "../../customHooks/useBoolean";
import ChangeTitle from "../../functions/ChangeTitle";
import { Button } from "../../components/ui/meny-time use/customButton";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";

type Props = {

}
export const Offers = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)

    ChangeTitle('приглашения')
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
            {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
            {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>
                        <SmallCenterPlate>
                            <div style={{ minHeight: '500px' }}>
                                <div className="offer">
                                    <div><img src="./svg/dota.svg" alt="" /> <img src="" alt="" className="ava" /> <p>ROKUZAN</p></div>
                                    <Button title="принять" function_={() => undefined} />
                                </div>
                                <div className="offer">
                                    <div><img src="./svg/dota.svg" alt="" /> <img src="" alt="" className="ava" /> <p>ROKUZAN</p></div>
                                    <Button title="принять" function_={() => undefined} />
                                </div>
                                <div className="offer">
                                    <div><img src="./svg/dota.svg" alt="" /> <img src="" alt="" className="ava" /> <p>ROKUZAN</p></div>
                                    <Button title="принять" function_={() => undefined} />
                                </div>
                                <div className="offer">
                                    <div><img src="./svg/dota.svg" alt="" /> <img src="" alt="" className="ava" /> <p>ROKUZAN</p></div>
                                    <Button title="принять" function_={() => undefined} />
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <Right>
                        <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
                    </Right>
                </div>}
        </>
    );
}