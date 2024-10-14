import { memo } from "react";
import { CenterPlate } from "../../../components/hoc/plates/centerPlate";
import { InlineUser } from "../../../components/ui/meny-time use/inlinePrezentation";
import useRequest from "../../../customHooks/useRequest";
import { TEAMServices } from "../../../services/TEAMServices";
import { useParams } from "react-router";
import { TOURNAMENTServices } from "../../../services/TOURNAMENTServices";
import { APPLICATIONServices } from "../../../services/APPLICATIONServices";
import { MATCHServices } from "../../../services/MATCHServices";
import { PLAYERServices } from "../../../services/PLAYERServices";


export const TeamChild = ({ }: {}) => {
    const params = useParams()
    const team = useRequest(() => TEAMServices.GETTeam(0, params.id), ['team'])

    const wintournaments = useRequest(() => TOURNAMENTServices.GETTouramentShort(0, params.id), ['tournamentsteam'])
    const tournaments = useRequest(() => APPLICATIONServices.GETApplication('', params.id), ['wintournamentsteam'])

    const matches = useRequest(() => MATCHServices.GETMatch('', 0, params.id), ['matchesteam'])
    const matches_ = useRequest(() => MATCHServices.GETMatch('', 0, '', params.id), ['matchesteam_'])
    const winmatches = useRequest(() => MATCHServices.GETMatch('', 0, '', '', params.id), ['winmatches'])

    console.log(team.finaldata[0])
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
                    idDirectror={team?.finaldata[0]?.director?.id} />
            </CenterPlate>
        </>
    );
}


const Players = memo(({ teamDirection, idDirectror }: { teamDirection: number, idDirectror: number }) => {
    const params = useParams()
    const player = useRequest(() => PLAYERServices.GETPlayer(0, teamDirection == 1 ? '' : params.iddirection,
        teamDirection == 2 ? '' : params.iddirection), ['playersteam'])
    return (
        <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0 0 10px 0', alignItems: 'normal', justifyItems: 'normal' }}>
            <div>
                {player && player.finaldata.map((item: any) => (
                    idDirectror != item?.user?.id && <InlineUser item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
})