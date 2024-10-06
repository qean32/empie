import { useState } from "react"
import { useNavigate } from "react-router"
import { SelectTeam } from "../../../components/hoc/admin/selectTeam"
import { AdminPlate } from "../../../components/hoc/plates/adminPlate"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import { Button } from "../../../components/ui/meny-time use/customButton"
import { InputDate, InputTime } from "../../../components/ui/meny-time use/customInput"
import Repair from "../../../components/ui/meny-time use/repair"
import { AdminMeeting, AdminMeetingWin } from "../../../components/hoc/admin/adminMeeting"


type PropsSomeMeeting = {
    element: any
}
export const MeetingChild = ({ element }: PropsSomeMeeting) => {
    const [match, setMatch] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}])

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
                <AdminMeeting />
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
            <AdminMeetingWin />
        </>
    );
}

type Props_ = {

}
export const Team = ({ }: Props_) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/team/2')} style={{ cursor: 'pointer' }}> <div className="ava hover3 transition03"></div> <p>POKUZAN</p> </div>
    );
}