import { useState } from "react"
import { Button } from "../../ui/meny-time use/customButton"
import { InputDate, InputTime } from "../../ui/meny-time use/customInput"
import { AdminPlate } from "../plates/adminPlate"
import { SelectTeam } from "./selectTeam"



export const AdminMeeting = ({ }: {}) => {
    const [teams, setTeams] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}])
    const [teamOne, setTeamOne] = useState<any>()
    const [teamTwo, setTeamTwo] = useState<any>()
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
                <SelectTeam teams={teams} setTeam={setTeamOne} />
                <SelectTeam teams={teams} setTeam={setTeamTwo} />
                <Button title={"установить команды"} function_={() => undefined} />
            </>
        </AdminPlate>
    );
}


export const AdminMeetingWin = ({ }: {}) => {
    const [teamWin, setTeamWin] = useState<any>()
    const [teams, setTeams] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}])
    return (
        <AdminPlate>
            <div className="adminpanel">
                <InputDate value={""} setValue={() => undefined} />
                <InputTime value={''} setValue={() => undefined} />


                <div>
                    team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin} </div>
                </div>
                <SelectTeam teams={teams} setTeam={setTeamWin} />
                <Button title={"установить победителя"} function_={() => undefined} />
            </div>
        </AdminPlate>
    );
}