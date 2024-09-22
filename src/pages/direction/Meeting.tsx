import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import Repair from "../../components/ui/meny-time use/repair";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
type Props = {
}
export const Meeting = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    ChangeTitle('матч')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer">
                                <div className="headmeeting">
                                    <div> <div className="ava"></div> <p>POKUZAN</p> </div>
                                    <div style={{ gap: '10px' }}> <img src="/svg/cup.svg" alt="" style={{ width: '30px' }} /> <div> <p>20:21</p><p style={{ fontSize: '12px' }}> 20.09 </p> </div> </div>
                                    <div> <div className="ava"></div> <p>zxcclowns</p> </div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ padding: '40px 0 0 0' }}>
                                <div style={{ width: '100%' }}>
                                    <div className="headmeeting">
                                        <div style={{ gap: '10px', flexDirection: 'row' }}> <img src="/svg/hands.svg" alt="" /> <p style={{ fontSize: '13px', width: '200px' }}>id: 0 <img src="/svg/copy.svg" alt="" onClick={() => navigator.clipboard.writeText('0')} style={{ transform: 'translate(2px, 3px)' }} /></p></div>
                                        <div><p>51:40</p></div>
                                    </div>
                                    <div className="meetingrepair">
                                        <Repair />
                                        <p style={{ fontSize: '15px' }}>информация отсутствует</p>
                                    </div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ padding: '40px 0 0 0' }}>
                                <div style={{ width: '100%' }}>
                                    <div className="headmeeting">
                                        <div style={{ gap: '10px', flexDirection: 'row' }}> <img src="/svg/cup.svg" alt="" /><p style={{ fontSize: '13px', width: '200px' }}>id: 7948176944 <img src="/svg/copy.svg" alt="" onClick={() => navigator.clipboard.writeText('7948176944')} style={{ transform: 'translate(2px, 3px)' }} /></p> </div>
                                        <div><p>51:40</p></div>
                                    </div>
                                    <div className="meetingrepair">
                                        <Repair />
                                        <a style={{ fontSize: '16px' }} href={`https://www.dotabuff.com/matches/${7948176944}`} target="_blank">ссылка дотабафф</a>
                                    </div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <Right>
                        <RightPanel><RightPanelDirectionChildren direction={0} /></RightPanel>
                    </Right>
                </div>}
        </>
    )
}