import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { LeftPanel } from "../../components/hoc/leftPanel";

type Props = {

}
export const Profile = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('пользователь')
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
                    <Center>
                        <CenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                                <div className="background"><img src="" alt="" /></div>
                                <article className="about">
                                    <p>username</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                                </article>
                                <div style={{ width: '80%', margin: '20px 0 0 0', display: 'flex', gap: '20px' }}>
                                    <div className="role" style={{ backgroundColor: `#c78d11` }}>организатор</div>
                                </div>
                                <div style={{ width: '80%', margin: '20px 0 25px 0', display: 'flex', gap: '20px', justifyContent: 'end' }}>
                                    <a href={``}><img src="/svg/telegram.svg" alt="" style={{ width: '44px' }} className="hover3 transition07" /></a>
                                    <a href={``}><img src="/svg/steam.svg" alt="" style={{ width: '44px' }} className="hover3 transition07" /></a>
                                </div>
                            </div>
                        </CenterPlate>
                        <CenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                                <div className="aboutcareer" style={{ justifyContent: 'center' }}>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                </div>
                            </div>
                        </CenterPlate>
                        <CenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                                <div className="trophy">
                                    <div>
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                    </div>
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