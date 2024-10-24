import { useNavigate, useParams } from "react-router"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import Repair from "../../../components/ui/meny-time use/repair"
import { AdminMeeting, AdminMeetingWin } from "../../../components/hoc/admin/adminMeeting"
import useRequest from "../../../customHooks/useRequest"
import { MEETINGServices } from "../../../services/MEETINGServices"
import { MATCHServices } from "../../../services/MATCHServices"


export const MeetingChild = ({ }: {}) => {
    const params: any = useParams()
    const matches = useRequest(() => MATCHServices.GETMatch(params.id), ['mathes'])
    const meeting = useRequest(() => MEETINGServices.GETMeeting(0, params.id), ['meeting'])

    return (
        <>{meeting.finaldata[0] ?
            <>
                <SmallCenterPlate>
                    <div className="dftcontainer">
                        <div className="headmeeting">
                            <Team item={meeting.finaldata[0].team_one} />
                            <div style={{ gap: '10px' }}> <img src="/svg/cup.svg" alt="" style={{ width: '30px' }} />
                                <div> <p>
                                    {meeting.finaldata[0].team_one_score}:{meeting.finaldata[0].team_two_score}</p>
                                    <p style={{ fontSize: '12px' }}> {meeting.finaldata[0].date} </p> </div> </div>
                            <Team item={meeting.finaldata[0].team_two} />
                        </div>
                    </div>
                </SmallCenterPlate>
                {matches?.finaldata && matches.finaldata.map((item) => (
                    <Match key={item.id} item={item} />
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
                <AdminMeeting idmeeting={0} />
            </>
        }
        </>
    );
}


export const Match = ({ item }: { item: any }) => {
    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ padding: '40px 0 0 0' }}>
                    <div style={{ width: '100%' }}>
                        <div className="headmeeting">
                            <div style={{ gap: '10px', flexDirection: 'row' }}> <img src="/svg/cup.svg" alt="" />
                                <p style={{ fontSize: '13px', width: '240px', cursor: 'pointer' }}>id: {item?.id_match}
                                    <img src="/svg/copy.svg" alt="" onClick={() => navigator.clipboard.writeText('7948176944')} style={{ transform: 'translate(2px, 3px)' }} /></p> </div>
                            <div><p>{item?.team_one_score} : {item?.team_two_score}</p></div>
                        </div>
                        <div className="meetingrepair">
                            <Repair />
                            {
                                item?.id_match == 0 ?
                                    <p style={{ fontSize: '15px' }}>информация отсутствует</p>
                                    :
                                    <a style={{ fontSize: '16px' }} href={`https://www.dotabuff.com/matches/${item?.id_match}`} target="_blank">ссылка дотабафф</a>
                            }
                        </div>
                    </div>
                </div>
            </SmallCenterPlate>
            <AdminMeetingWin teams={undefined} idmeeting={0} />
        </>
    );
}


export const Team = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/team/${item?.id}`)} style={{ cursor: 'pointer' }}> <div className="ava hover3 transition03"></div> <p>{item?.name}</p> </div>
    );
}