import { useContext, useEffect, useState } from "react";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { useNavigate } from "react-router";
import Calendar from "react-calendar";
import moment from "moment";
import { colors } from "../../functions/GiveConst";
import { Button } from "../../components/ui/meny-time use/customButton";
import { GridPoint } from "../../components/ui/meny-time use/gridPoint";
type Props = {
}
export const Tournament = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const navigate = useNavigate()
    const [meetings, setMeetings] = useState<any[]>([{ date: '' }])

    ChangeTitle('турнир')

    return (
        <>
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ width: '140vh', flexDirection: 'column', minWidth: '1000px' }}>
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
                                <div className="gridtournamnet">
                                    <section><GridPoint /></section>
                                    <section></section>
                                    <section></section>
                                    <section></section>
                                    <section></section>
                                    <section></section>
                                    <section></section>
                                </div>
                                <div className="undertournamnet"></div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                </div>}
        </>
    )
}

const CustomCalendar = ({ meetings }: { meetings: any }) => {
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
}