import { useState } from "react";
import { Button } from "../../ui/meny-time use/customButton";
import { AdminPlate } from "../plates/adminPlate";
import { SelectTeam } from "./selectTeam";
import { InputDate, InputTime } from "../../ui/meny-time use/customInput";

type Props = {

}
export const AdminTournament = ({ }: Props) => {
    const [meetings, setMeetings] = useState<any[]>([{}, {}, {}, {}, {}, {}])
    const [teamWin, setTeamWin] = useState<any>()
    return (
        <AdminPlate>
            <div className="adminpanel">
                <Button title={"открыть турнир"} function_={() => undefined} />
                <Button title={"генерация матчей"} function_={() => undefined} />
                <div>
                    team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin} </div>
                </div>
                <SelectTeam teams={meetings} setTeam={setTeamWin} />
                <Button title={"установить победителя"} function_={() => undefined} />
            </div>
        </AdminPlate>
    );
}