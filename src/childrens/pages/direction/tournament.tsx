import moment from "moment"
import { memo, useContext } from "react"
import Calendar from "react-calendar"
import { useNavigate, useParams } from "react-router"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import { Button } from "../../../components/ui/meny-time use/customButton"
import { GridPoint } from "../../../components/ui/meny-time use/gridPoint"
import { Tournament_10 } from "../../../components/ui/one-time use/grid/10_tournament copy"
import { Tournament_11 } from "../../../components/ui/one-time use/grid/11_tournament"
import { Tournament_12 } from "../../../components/ui/one-time use/grid/12_tournament"
import { Tournament_6 } from "../../../components/ui/one-time use/grid/6_tournament"
import { Tournament_7 } from "../../../components/ui/one-time use/grid/7_tournament"
import { Tournament_8 } from "../../../components/ui/one-time use/grid/8_tournament"
import { Tournament_9 } from "../../../components/ui/one-time use/grid/9_tournament"
import { AdminTournament } from "../../../components/hoc/admin/adminTournament"
import useRequest from "../../../customHooks/useRequest"
import { APPLICATIONServices } from "../../../services/APPLICATIONServices"
import { MEETINGServices } from "../../../services/MEETINGServices"
import { TOURNAMENTServices } from "../../../services/TOURNAMENTServices"
import { AdminSmallPanel } from "../../../components/hoc/plates/adminSmallPanel"
import { TEAMServices } from "../../../services/TEAMServices"
import { SomeContext } from "../../../context"
import { useMutation } from "react-query"


export const TournamentChild = ({ }: {}) => {
    const params: any = useParams()
    const tournament = useRequest(() => TOURNAMENTServices.GETTournamet(params.id), ['tournament'])
    const applications = useRequest(() => APPLICATIONServices.GETApplication(params.id), ['applications'])
    const meetings = useRequest(() => MEETINGServices.GETMeeting(0, '', 99, params.id), ['meetings'])
    const meetingsq = useRequest(() => MEETINGServices.GETMeeting(0, '', 99, params.id, true), ['meetingsq'])
    const { user }: any = useContext(SomeContext)
    const getteam = useRequest(() => TEAMServices.GETTeam(0, '', user?.user_id, tournament?.finaldata[0]?.direction?.id), ['getteamdirector'])
    const createapplication = useMutation(() => APPLICATIONServices.CREATEApplication({ tournament: params?.id, team: getteam?.finaldata[0]?.id }))
    
    const applicationHandler = () => {
        createapplication.mutate()
    }


    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ width: '140vh', flexDirection: 'column', minWidth: '1400px' }}>
                    <div className="infotournamnet">
                        <div>
                            <div><p>команды / расписание</p></div>
                            {applications && applications.finaldata.map((item: any) => (
                                <Application item={item} key={item.id} />
                            ))}
                            {
                                getteam?.finaldata[0]?.id &&
                                !applications?.finaldata?.find((application: any) => application?.team?.director == user?.user_id) &&
                                <div style={{ padding: '40px 0 0 0' }}>
                                    <Button title="подать заявку" function_={applicationHandler} />
                                </div>
                            }
                        </div>
                        <div>
                            <CustomCalendar meetings={meetings.finaldata} />
                        </div>
                    </div>

                    {meetings.finaldata && meetings.finaldata.length < 6 && <div className="gridtournamnet center">
                        <p style={{ height: '20px' }}>идет набор команд...</p> <img src="/svg/dragon-fire.svg" alt="" style={{ width: '240px' }} /> </div>}

                    {tournament?.finaldata[0]?.is_on && meetings.finaldata.length < 6 && <div className="gridtournamnet center"> <p style={{ height: '20px' }}>
                        набор команд окончен...</p> <img src="/svg/dragon-fire.svg" alt="" style={{ width: '240px' }} /> </div>}

                    {meetings.finaldata && meetings.finaldata.length == 6 && <Tournament_6 meetings={meetings?.finaldata} />}
                    {meetings.finaldata && meetings.finaldata.length == 7 && <Tournament_7 meetings={meetings?.finaldata} />}
                    {meetings.finaldata && meetings.finaldata.length == 8 && <Tournament_8 meetings={meetings?.finaldata} />}
                    {meetings.finaldata && meetings.finaldata.length == 9 && <Tournament_9 meetings={meetings?.finaldata} />}
                    {meetings.finaldata && meetings.finaldata.length == 10 && <Tournament_10 meetings={meetings?.finaldata} />}
                    {meetings.finaldata && meetings.finaldata.length == 11 && <Tournament_11 meetings={meetings?.finaldata} />}
                    {meetings.finaldata && meetings.finaldata.length == 12 && <Tournament_12 meetings={meetings?.finaldata} />}


                    <div className="undertournamnet">
                        <p style={{ padding: '0 0 0 50px' }}>матчи - квалицикации</p>
                        <div>
                            {meetingsq.finaldata && meetingsq.finaldata.map((item) => (<GridPoint key={item.id} item={item} />))}
                        </div>
                    </div>
                </div>
            </SmallCenterPlate>
            <AdminTournament applications={[]} />
        </>
    )
}

const CustomCalendar = memo(({ meetings }: { meetings: any }) => {
    const date = new Date()
    const navigate = useNavigate()

    let CheckFunction = (array: any, value: any) => {
        let result = false
        array.forEach((element: any) => {
            if (element.date == value) {
                result = element.id
            }
        });
        return result
    }
    return (
        <>

            <Calendar value={date}
                defaultActiveStartDate={date}

                onClickDay={(e) => {
                    let id = CheckFunction(meetings, moment(new Date(e).toISOString(), "YYYY-MM-DDTHH:mm:ss.sssZ").format("DD.MM.YY"))
                    if (id) {
                        navigate(`/meeting/${id}`)
                    }
                }}

                tileClassName={({ date }) => {
                    if (meetings.find((x: any) =>
                        x.date === moment(date).format("DD.MM.YY")
                    )) {
                        return 'highlight'
                    }
                }}

            />

        </>
    );
})



export const Application = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    const updateapplicant = useMutation(() => APPLICATIONServices.UPDATEApplication({ is_on: true }, item?.id).then(() => location.reload()))
    return (
        <div>
            <div onClick={() => navigate(`/team/${item?.team?.id}`)} className="teamtournament transition07">
                <div>
                    <div className="ava" style={{ backgroundImage: `url(${item?.team?.logo})` }}></div>
                    <p>{item?.team?.name}</p>
                </div>
                {item?.is_on ? <img src="/svg/accept.svg" alt="" style={{ width: '18px' }} /> : <img src="/svg/cross.svg" alt="" style={{ width: '14px' }} />}
            </div>
            {
                !item?.is_on &&
                <AdminSmallPanel>
                    <Button title={"одообрить"} function_={() => updateapplicant.mutate()} />
                </AdminSmallPanel>
            }
        </div>
    );
}