import { useContext, useState } from "react";
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
import { useNavigate } from "react-router";
import { AdminPlate } from "../../components/hoc/plates/adminPlate";
import { InputDate, InputTime, Search } from "../../components/ui/meny-time use/customInput";
import { Button } from "../../components/ui/meny-time use/customButton";
type Props = {
}
export const Meeting = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    ChangeTitle('матч')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel function_={modal.SwapFn} />
                <Center>
                    <SomeMeeting element={false} />
                </Center>
                <Right>
                    <RightPanel><RightPanelDirectionChildren direction={0} /></RightPanel>
                </Right>
            </div>
        </>
    )
}

type Props_ = {

}
export const Team = ({ }: Props_) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/team/2')} style={{ cursor: 'pointer' }}> <div className="ava hover3 transition03"></div> <p>POKUZAN</p> </div>
    );
}


type PropsSomeMeeting = {
    element: any
}
export const SomeMeeting = ({ element }: PropsSomeMeeting) => {
    const [match, setMatch] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}])
    const [teams, setTeams] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}])
    const [teamOne, setTeamOne] = useState<any>()
    const [teamTwo, setTeamTwo] = useState<any>()

    const selectTeamHandler = (value: any) => {
        if (teamOne) {
            setTeamTwo(value)
            return
        }

        setTeamOne(value)
    }
    const [teamWin, setTeamWin] = useState<any>()

    return (
        <>{element ?
            <>
                <SmallCenterPlate>
                    <div className="dftcontainer">
                        <div className="headmeeting">
                            <Team />
                            <div style={{ gap: '10px' }}> <img src="/svg/cup.svg" alt="" style={{ width: '30px' }} />
                                <div> <p>20:21</p><p style={{ fontSize: '12px' }}> 20.09 </p> </div> </div>
                            <Team />
                        </div>
                    </div>
                </SmallCenterPlate>
                {match.map((el, index) => (
                    <Match key={index} element={el} />
                ))}
            </>
            :
            <>
                <SmallCenterPlate>
                    <div className="dftcontainer">
                        <div style={{ width: '100%' }}>
                            <div className="meetingrepair">
                                <Repair />
                                <p style={{ fontSize: '15px' }}>информация отсутствует</p>
                            </div>
                        </div>
                    </div>
                </SmallCenterPlate>
                <AdminPlate>
                    <>
                        <div className="adminpanel" style={{ flexDirection: 'row', gap: '20px' }}>
                            <div>
                                team one : <div className="role" onClick={() => setTeamOne({})}> {teamOne?.name} </div>
                            </div>
                            <div>
                                team two : <div className="role" onClick={() => setTeamTwo({})}> {teamTwo?.name} </div>
                            </div>
                        </div>
                        <div className="adminpanel" style={{ flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
                            {teams.map((el, index) => <div
                                className="role" onClick={() => selectTeamHandler({ name: String(index) })}> ROKUZAN </div>)}
                        </div>
                        <Button title={"установить команды"} function_={() => undefined} />


                        <div>
                            team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin?.name} </div>
                        </div>
                        <div className="adminpanel" style={{ flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
                            {teams.map((el, index) => <div
                                className="role" onClick={() => setTeamWin({ name: String(index) })}> ROKUZAN </div>)}
                        </div>
                        <Button title={"установить победителя"} function_={() => undefined} />
                    </>
                </AdminPlate>
            </>
        }
        </>
    );
}

type PropsMatch = {
    element: any
}
export const Match = ({ element }: PropsMatch) => {
    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ padding: '40px 0 0 0' }}>
                    <div style={{ width: '100%' }}>
                        <div className="headmeeting">
                            <div style={{ gap: '10px', flexDirection: 'row' }}> <img src="/svg/cup.svg" alt="" /><p style={{ fontSize: '13px', width: '240px', cursor: 'pointer' }}>id: 7948176944 <img src="/svg/copy.svg" alt="" onClick={() => navigator.clipboard.writeText('7948176944')} style={{ transform: 'translate(2px, 3px)' }} /></p> </div>
                            <div><p>51:40</p></div>
                        </div>
                        <div className="meetingrepair">
                            <Repair />
                            {
                                element ?
                                    <p style={{ fontSize: '15px' }}>информация отсутствует</p>
                                    :
                                    <a style={{ fontSize: '16px' }} href={`https://www.dotabuff.com/matches/${7948176944}`} target="_blank">ссылка дотабафф</a>
                            }
                        </div>
                    </div>
                </div>
            </SmallCenterPlate>
            <AdminPlate>
                <div className="adminpanel">
                    <InputDate value={""} setValue={() => undefined} />
                    <InputTime value={''} setValue={() => undefined} />
                </div>
            </AdminPlate>
        </>
    );
}