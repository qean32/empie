import { useState } from "react"
import { Button } from "../../ui/meny-time use/customButton"
import { InputDate, InputTime } from "../../ui/meny-time use/customInput"
import { AdminPlate } from "../plates/adminPlate"
import { SelectTeam } from "./selectTeam"
import useRequest from "../../../customHooks/useRequest"
import { TEAMServices } from "../../../services/TEAMServices"
import { useMutation } from "react-query"
import { MEETINGServices } from "../../../services/MEETINGServices"



export const AdminMeeting = ({ teams__, idmeeting }: { teams__: any, idmeeting: number }) => {
    const [teamWin, setTeamWin] = useState<any>()

    const setwin = useMutation(() => MEETINGServices.UPDATEMeeting({ team_win: teamWin }, idmeeting)
        .then(() => location.reload()))
    const [teamOne, setTeamOne] = useState<any>()
    const [teamTwo, setTeamTwo] = useState<any>()
    const [date, setDate] = useState('')
    const updatemeeting = useMutation(() => MEETINGServices.UPDATEMeeting({ date }, idmeeting)
        .then(() => location.reload()))

    const teams = useRequest(() => TEAMServices.GETTeamShort(0), ['teams__'])
    const setteams = useMutation(() => MEETINGServices.UPDATEMeeting({ team_one: teamOne, team_two: teamTwo }, idmeeting)
        .then(() => location.reload()))
    return (
        <AdminPlate>
            <>
                <div className="adminpanel" style={{ flexDirection: 'row', gap: '20px' }}>
                    <div>
                        <InputDate value={date} setValue={setDate} />
                        <Button title={"обновить"} function_={() => updatemeeting.mutate()} />
                    </div>
                    <div style={{ padding: '100px 0 0 0' }}>
                        <div>
                            team one : <div className="role" onClick={() => setTeamOne({})}> {teamOne} </div>
                        </div>
                        <div>
                            team two : <div className="role" onClick={() => setTeamTwo({})}> {teamTwo} </div>
                        </div>
                    </div>
                </div>
                <SelectTeam teams={teams?.finaldata} setTeam={setTeamOne} />
                <SelectTeam teams={teams?.finaldata} setTeam={setTeamTwo} />
                <Button title={"установить команды"} function_={() => setteams.mutate()} />
                <div>
                    team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin} </div>
                </div>
                <SelectTeam teams={teams__} setTeam={setTeamWin} />
                <Button title={"установить победителя"} function_={() => setwin.mutate()} />
            </>
        </AdminPlate>
    );
}


export const AdminMatch = ({ teams, idmeeting }: { teams: any, idmeeting: number }) => {
    const [teamWin, setTeamWin] = useState<any>()
    const [time, setTime] = useState('')
    const setwin = useMutation(() => MEETINGServices.UPDATEMeeting({ team_win: teamWin }, idmeeting)
        .then(() => location.reload()))
    const updatematch = useMutation(() => MEETINGServices.UPDATEMeeting({ time }, idmeeting)
        .then(() => location.reload()))

    return (
        <AdminPlate>
            <div className="adminpanel">
                <div>
                    team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin} </div>
                </div>
                <SelectTeam teams={teams} setTeam={setTeamWin} />
                <Button title={"установить победителя"} function_={() => setwin.mutate()} />
                <InputTime value={time} setValue={setTime} />

                <Button title={"обновить"} function_={() => updatematch.mutate()} />
            </div>
        </AdminPlate>
    );
}