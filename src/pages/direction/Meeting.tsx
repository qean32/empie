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
                    <div className="center">
                        <SmallCenterPlate>
                            <div className="container">
                                <div className="headmeeting">
                                    <div> <div className="ava"></div> <p>POKUZAN</p> </div>
                                    <div style={{ gap: '10px' }}> <img src="/svg/cup.svg" alt="" style={{ width: '30px' }} /> <div> <p>20:21</p><p style={{ fontSize: '12px' }}> 20.09 </p> </div> </div>
                                    <div> <div className="ava"></div> <p>zxcclowns</p> </div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                        <SmallCenterPlate>
                            <div className="container" style={{ padding: '40px 0 0 0' }}>
                                <div style={{ width: '100%' }}>
                                    <div className="headmeeting">
                                        <div style={{ gap: '10px', flexDirection: 'row' }}> <img src="/svg/hands.svg" alt="" /> <p style={{ fontSize: '13px' }}>время 18:30</p>  <p style={{ fontSize: '13px' }}>id: 0000000000</p></div>
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
                            <div className="container" style={{ padding: '40px 0 0 0' }}>
                                <div style={{ width: '100%' }}>
                                    <div className="headmeeting">
                                        <div style={{ gap: '10px', flexDirection: 'row' }}> <img src="/svg/cup.svg" alt="" /> <p style={{ fontSize: '13px' }}>время 18:30</p>  <p style={{ fontSize: '13px' }}>id: 7948176944</p> </div>
                                        <div><p>51:40</p></div>
                                    </div>
                                    <div className="meetingrepair">
                                        <Repair />
                                        <a style={{ fontSize: '16px' }} href={`https://www.dotabuff.com/matches/${7948176944}`} target="_blank">ссылка дотабафф</a>
                                    </div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </div>
                    <div>
                        <RightPanel><RightPanelDirectionChildren direction={0} /></RightPanel>
                    </div>
                </div>}
        </>
    )
}