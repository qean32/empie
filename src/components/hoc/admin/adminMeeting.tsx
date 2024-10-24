import { useState } from "react"
import { Button } from "../../ui/meny-time use/customButton"
import { InputDate, InputTime } from "../../ui/meny-time use/customInput"
import { AdminPlate } from "../plates/adminPlate"
import { SelectTeam } from "./selectTeam"
import useRequest from "../../../customHooks/useRequest"
import { TEAMServices } from "../../../services/TEAMServices"
import { useMutation } from "react-query"
import { MEETINGServices } from "../../../services/MEETINGServices"



export const AdminMeeting = ({ idmeeting }: { idmeeting: number }) => {
    const [teamOne, setTeamOne] = useState<any>()
    const [teamTwo, setTeamTwo] = useState<any>()

    const teams = useRequest(() => TEAMServices.GETTeamShort(0), ['teams__'])
    const setteams = useMutation(() => MEETINGServices.UPDATEMeeting({ team_one: teamOne, team_two: teamTwo }, idmeeting))
    return (
        <AdminPlate>
            <>
                <div className="adminpanel" style={{ flexDirection: 'row', gap: '20px' }}>
                    <div>
                        team one : <div className="role" onClick={() => setTeamOne({})}> {teamOne} </div>
                    </div>
                    <div>
                        team two : <div className="role" onClick={() => setTeamTwo({})}> {teamTwo} </div>
                    </div>
                </div>
                <SelectTeam teams={teams?.finaldata[0]} setTeam={setTeamOne} />
                <SelectTeam teams={teams?.finaldata[0]} setTeam={setTeamTwo} />
                <Button title={"установить команды"} function_={() => setteams.mutate()} />
            </>
        </AdminPlate>
    );
}


export const AdminMeetingWin = ({ teams, idmeeting }: { teams: any, idmeeting: number }) => {
    const [teamWin, setTeamWin] = useState<any>()
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const setwin = useMutation(() => MEETINGServices.UPDATEMeeting({ team_win: teamWin }, idmeeting))
    const updatemeeting = useMutation(() => MEETINGServices.UPDATEMeeting({ date, time }, idmeeting))

    return (
        <AdminPlate>
            <div className="adminpanel">
                <InputDate value={date} setValue={setDate} />
                <InputTime value={time} setValue={setTime} />

                <Button title={"обновить"} function_={() => updatemeeting.mutate()} />


                <div>
                    team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin} </div>
                </div>
                <SelectTeam teams={teams} setTeam={setTeamWin} />
                <Button title={"установить победителя"} function_={() => setwin.mutate()} />
            </div>
        </AdminPlate>
    );
}