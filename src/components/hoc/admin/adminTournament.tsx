import { useState } from "react";
import { Button } from "../../ui/meny-time use/customButton";
import { AdminPlate } from "../plates/adminPlate";
import { SelectTeam } from "./selectTeam";
import { useMutation } from "react-query";
import { useParams } from "react-router";
import { TOURNAMENTServices } from "../../../services/TOURNAMENTServices";
import { MEETINGServices } from "../../../services/MEETINGServices";


export const AdminTournament = ({ applications }: { applications: any[] }) => {
    const [teamWin, setTeamWin] = useState<any>()
    const params: any = useParams()

    const setwin = useMutation(() => TOURNAMENTServices.UPDATETournamet({ win_tournament: teamWin }, params.id))
    const opentrn = useMutation(() => TOURNAMENTServices.UPDATETournamet({ is_on: true }, params.id))
    const createMeeting = useMutation(() => MEETINGServices.CREATEMeeting({ tournament: params.id }))
    const createMeetingq = useMutation(() => MEETINGServices.CREATEMeeting({ tournament: params.id, is_qualification: true }))

    const genetareMatch = (count: number) => {

        const count_ =
            count == 6 ? 8
                : count == 7 ? 9
                    : count == 8 ? 10
                        : count == 9 ? 10
                            : count == 10 ? 13
                                : count == 11 ? 15
                                    :
                                    18

        const count__ =
            count == 6 ? 3
                : count == 7 ? 4
                    : count == 8 ? 4
                        : count == 9 ? 5
                            : count == 10 ? 5
                                : count == 11 ? 6
                                    :
                                    6

        for (let i = 0; i < count_; i++) {
            createMeeting.mutate()
        }

        for (let i = 0; i < count__; i++) {
            createMeetingq.mutate()
        }
    }

    return (
        <AdminPlate>
            <div className="adminpanel">
                <Button title={"открыть турнир"} function_={() => opentrn.mutate()} />
                <Button title={"генерация матчей"} function_={() => genetareMatch(applications.length)} />
                <div>
                    team win : <div className="role" onClick={() => setTeamWin({})}> {teamWin} </div>
                </div>
                <SelectTeam teams={applications} setTeam={setTeamWin} />
                <Button title={"установить победителя"} function_={() => setwin.mutate()} />
            </div>
        </AdminPlate>
    );
}