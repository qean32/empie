import { memo, useContext } from "react";
import { CenterPlate } from "../../../components/hoc/plates/centerPlate";
import { InlineUser } from "../../../components/ui/meny-time use/inlinePrezentation";
import useRequest from "../../../customHooks/useRequest";
import { TEAMServices } from "../../../services/TEAMServices";
import { useParams } from "react-router";
import { TOURNAMENTServices } from "../../../services/TOURNAMENTServices";
import { APPLICATIONServices } from "../../../services/APPLICATIONServices";
import { MATCHServices } from "../../../services/MATCHServices";
import { PLAYERServices } from "../../../services/PLAYERServices";
import { useMutation } from "react-query";
import { TRANSFERServices } from "../../../services/TRANSFERServices copy";
import { SomeContext } from "../../../context";
import { ButtonDisabled } from "../../../components/ui/meny-time use/customButton";


export const TeamChild = ({ }: {}) => {
    const params = useParams()
    const team = useRequest(() => TEAMServices.GETTeam(0, params.id), ['team'])

    const wintournaments = useRequest(() => TOURNAMENTServices.GETTouramentShort(0, params.id), ['tournamentsteam'])
    const tournaments = useRequest(() => APPLICATIONServices.GETApplication('', params.id), ['wintournamentsteam'])

    const matches = useRequest(() => MATCHServices.GETMatch('', 0, params.id), ['matchesteam'])
    const matches_ = useRequest(() => MATCHServices.GETMatch('', 0, '', params.id), ['matchesteam_'])
    const winmatches = useRequest(() => MATCHServices.GETMatch('', 0, '', '', params.id), ['winmatches'])
    return (
        <>
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="background ava" style={{ backgroundImage: `url(${team?.finaldata[0]?.background})` }}>
                        <div style={{ backgroundImage: `url(${team?.finaldata[0]?.logo})` }}></div>
                    </div>
                    <article className="about">
                        <p>{team?.finaldata[0]?.name}</p>
                        <p style={{ transform: 'translate(0, -10px)' }}>{team?.finaldata[0]?.status}</p>
                        <p>матчи: {winmatches?.count}/
                            {matches?.count + matches_?.count} турниры: {tournaments?.count}/
                            {wintournaments?.count} показатели: {winmatches?.count / (matches?.count + matches_?.count)}</p>
                    </article>
                </div>
            </CenterPlate >
            <CenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '40px 0' }}>
                    <div className="trophy">
                        <div style={{ padding: '20px 40px' }}>

                            {team?.finaldata[0] && team.finaldata[0].cups?.map((item: any) => {
                                <img src={`${item?.image}`} key={item.id} alt="" />
                            })}

                        </div>
                    </div>
                </div>
            </CenterPlate>
            <CenterPlate>
                <div style={{ padding: '20px 0' }}>
                    <InlineUser item={team?.finaldata[0]?.director} />
                </div>
                <Players teamDirection={team?.finaldata[0]?.direction?.id}
                    idDirector={team?.finaldata[0]?.director?.id} />
            </CenterPlate>
        </>
    );
}


const Players = memo(({ teamDirection, idDirector }: { teamDirection: number, idDirector: number }) => {
    const params = useParams()
    const { user }: any = useContext(SomeContext)

    const exitHandler = () => {
        const regtransfer: any = useMutation(['regtransfer'],
            () => TRANSFERServices.CREATETransfer({ script: 1, user: user?.user_id, team: params.id }))
        const exitteam: any = useMutation(['exitteam'],
            () => PLAYERServices.UPDATEPlayer(teamDirection == 1 ?
                { team_cs: null }
                :
                { team_dota: null }
                , user?.user_id)
                .then(() => regtransfer.mutate())
                .then(() => location.reload())
        )

        exitteam.mutate()
    }

    const players = useRequest(() => PLAYERServices.GETPlayer(0,
        teamDirection == 1 ? '' : params.id,
        teamDirection == 2 ? '' : params.id
    ), ['playersteam'])

    return (
        <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0 0 10px 0', alignItems: 'normal', justifyItems: 'normal' }}>
            <div>
                {players && players.finaldata.map((item: any) => (
                    idDirector != item?.user?.id && <InlineUser item={item} key={item.id} />
                ))}
            </div>
            {
                idDirector != user?.user_id &&
                players.finaldata.find((player: any) => player?.user?.id == user?.user_id) &&
                <div style={{ width: '70%', padding: '0 0 0 20px' }}>
                    <ButtonDisabled title={"покинуть команду"} function_={exitHandler} />
                </div>
            }
        </div>
    );
})