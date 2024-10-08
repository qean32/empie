import moment from "moment"
import { useState, useEffect, memo } from "react"
import Calendar from "react-calendar"
import { useNavigate } from "react-router"
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


type Props = {
}
export const TournamentChild = ({ }: Props) => {
    const navigate = useNavigate()
    const [meetings, setMeetings] = useState<any[]>([{}, {}, {}, {}, {}, {}])

    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ width: '140vh', flexDirection: 'column', minWidth: '1400px' }}>
                    <div className="infotournamnet">
                        <div>
                            <div><p>команды / расписание</p></div>
                            <div>
                                <div onClick={() => navigate(`/team/2`)} className="teamtournament transition07">
                                    <div>
                                        <div className="ava"></div>
                                        <p>team</p>
                                    </div>
                                    <img src="/svg/accept.svg" alt="" style={{ width: '19px', transform: 'translate(3px, 0)' }} />
                                </div>
                            </div>
                            <div>
                                <div onClick={() => navigate(`/team/2`)} className="teamtournament transition07">
                                    <div>
                                        <div className="ava"></div>
                                        <p>team</p>
                                    </div>
                                    <img src="/svg/cross.svg" alt="" style={{ width: '14px' }} />
                                </div>
                            </div>
                            <div>
                                <div onClick={() => navigate(`/team/2`)} className="teamtournament transition07">
                                    <div>
                                        <div className="ava"></div>
                                        <p>team</p>
                                    </div>
                                    <img src="/svg/cross.svg" alt="" style={{ width: '14px' }} />
                                </div>
                                <Button title="одобрить" function_={() => undefined} />
                            </div>
                        </div>
                        <CustomCalendar meetings={meetings} />
                    </div>

                    {meetings.length < 6 && <div className="gridtournamnet"> <p>идет набор команд...<img src="/img/cezar.webp" alt="" /></p> </div>}

                    {meetings.length > 12 && <div className="gridtournamnet"> <p>набор команд окончен...<img src="/img/cezar.webp" alt="" /></p> </div>}
                    { /* ПОТОМ ЗАМЕНИТЬ УСЛОВИЕ!!! */}

                    {meetings.length == 6 && <Tournament_6 />}
                    {meetings.length == 7 && <Tournament_7 />}
                    {meetings.length == 8 && <Tournament_8 />}
                    {meetings.length == 9 && <Tournament_9 />}
                    {meetings.length == 10 && <Tournament_10 />}
                    {meetings.length == 11 && <Tournament_11 />}
                    {meetings.length == 12 && <Tournament_12 />}


                    <div className="undertournamnet">
                        <p style={{ padding: '0 0 0 50px' }}>матчи - квалицикации</p>
                        <div>
                            {meetings.map((el, index) => (<GridPoint key={index} />))}
                        </div>
                    </div>
                </div>
            </SmallCenterPlate>
            <AdminTournament />
        </>
    )
}

const CustomCalendar = memo(({ meetings }: { meetings: any }) => {
    const [onlyDate, setOnlyDate] = useState<any>(['24.09.24', '21.09.24'])
    const date = new Date()
    const navigate = useNavigate()

    useEffect(() => {
        if (meetings) {
            meetings.forEach(({ date }: { date: any }) => {
                if (date) {
                    setOnlyDate((prew: any) => [...prew, date])
                }
            })
        }
    }, [meetings])

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
                    if (onlyDate.find((x: any) =>
                        x === moment(date).format("DD.MM.YY")
                    )) {
                        return 'highlight'
                    }
                }}

            />
        </>
    );
})