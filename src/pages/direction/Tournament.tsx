import { useContext, useEffect, useState } from "react";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { useNavigate } from "react-router";
type Props = {
}
export const Tournament = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const navigate = useNavigate()

    ChangeTitle('турнир')

    const [date, setDate] = useState(new Date());
    const [mark, setmark] = useState<any[]>([])
    const [mark_, setmark_] = useState<any[]>([])
    const [meeting, setmeeting] = useState<any[]>([{ date: '' }])

    useEffect(() => {
        if (meeting) {
            for (let index = 0; index < meeting.length; index++) {
                if (meeting[index].date) {
                    setmark((prew: any) => [...prew, meeting[index].date])
                }
            }
            for (let index = 0; index < meeting.length; index++) {
                if (meeting[index].date) {
                    setmark_((prew: any) => [...prew, { 'date': meeting[index].date, 'id': meeting[index].id }])
                }
            }
        }
    }, [meeting])

    let CheckFunction = (array: any, value: any) => {
        let result = false
        for (let index = 0; index < array.length; index++) {
            if (array[index].date == value) {
                result = array[index].id
            }
        }
        return result
    }
    return (
        <>
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ width: '120vh', flexDirection: 'column' }}>
                                <div className="infotournamnet">
                                    <Calendar onChange={setDate} value={date} defaultActiveStartDate={new Date(date.getFullYear(mark[0]), date.getMonth(mark[0]))}
                                        onClickDay={(e) => {
                                            let id = CheckFunction(mark_, moment(new Date(e).toISOString(), "YYYY-MM-DDTHH:mm:ss.sssZ").format("DD.MM.YY"))
                                            if (id) {
                                                navigate(`/${str_direction}/meeting/${id}`)
                                            }
                                        }}
                                        tileClassName={({ date, view }) => {
                                            if (mark.find(x => x === moment(date).format("DD.MM.YY"))) {
                                                return 'highlight'
                                            }
                                        }} />
                                </div>
                                <div className="gridtournamnet"></div>
                                <div className="undertournamnet"></div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                </div>}
        </>
    )
}