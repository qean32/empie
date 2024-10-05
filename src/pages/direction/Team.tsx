import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";

type Props = {

}
export const Team = ({ }: Props) => {
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
                    <div>
                        <img src="/svg/dota.svg" alt="" style={{ transform: 'translate(0, 10px)' }} />
                    </div>
                    <Center>
                        <CenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                                <div className="background"><img src="" alt="" /></div>
                                <article className="about">
                                    <p>teamname</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                                    <p style={{ fontSize: '1.6vh' }}>матчи: 23/32 турниры: 2/3 показатели: 52%</p>
                                </article>
                                <div style={{ padding: '20px 0' }}></div>
                            </div>
                        </CenterPlate>
                        <CenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                                <div className="trophy">
                                    <div style={{ padding: '20px 40px' }}>
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </CenterPlate>
                        <CenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '20px 0', alignItems: 'normal', justifyItems: 'normal' }}>
                                <div>
                                    <div className="kep">
                                        <InlineUser />
                                    </div>
                                    <InlineUser />
                                    <InlineUser />
                                    <InlineUser />
                                    <InlineUser />
                                </div>
                            </div>
                        </CenterPlate>
                    </Center>
                    <Right>
                        <RightPanel><div className="dftcontainer"></div></RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}