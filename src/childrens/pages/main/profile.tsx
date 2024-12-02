import { CenterPlate } from "../../../components/hoc/plates/centerPlate";
import { useNavigate, useParams } from "react-router";
import useRequest from "../../../customHooks/useRequest";
import { USERServices } from "../../../services/USERServices";
import { PLAYERServices } from "../../../services/PLAYERServices";


export const ProfileChild = ({ }: {}) => {
    const params = useParams()
    const user_ = useRequest(() => USERServices.GETUser(0, params.id), ['user'])
    // location.reload()

    return (
        <>
            <CenterPlate>
                <div className="dftcontainer profile" style={{ flexDirection: 'column', padding: '0' }}>
                    <div className="background ava" style={{ backgroundImage: `url(${user_?.finaldata[0]?.background})` }}>
                        <div className="ava" style={{ backgroundImage: `url(${user_?.finaldata[0]?.ava})` }}></div>
                    </div>
                    <article className="about">
                        <p>{user_?.finaldata[0]?.first_name} {user_?.finaldata[0]?.last_name}</p>
                        <p>{user_?.finaldata[0]?.status}</p>
                    </article>
                    <section>
                        {user_?.finaldata[0]?.telegram && <a href={`${user_?.finaldata[0]?.telegram}`} target="_blank">
                            <img src="/svg/telegram.svg" alt="" style={{ width: '32px' }} className="hover3 transition07" /></a>}
                        {user_?.finaldata[0]?.steam && <a href={`${user_?.finaldata[0]?.steam}`} target="_blank">
                            <img src="/svg/steam.svg" alt="" style={{ width: '32px' }} className="hover3 transition07" /></a>}
                    </section>
                    <section style={{ padding: '40px 0 25px 0' }}>
                        {user_?.finaldata[0]?.roles.length > 0 && user_?.finaldata[0]?.roles.map((item: any) => (
                            <div className="role" style={{ backgroundColor: `${item?.color}` }} key={item?.id}>{item?.name}</div>
                        ))}
                    </section>
                </div>
            </CenterPlate>
            <Cups cups={user_?.finaldata[0]?.cups} />
            <PlayerInfo />
        </>
    );
}

const PlayerInfo = () => {
    const params = useParams()
    const player = useRequest(() => PLAYERServices.GETPlayer(0, '', '', params.id), ['getplayer'])
    const navigate = useNavigate()

    return (
        <CenterPlate>
            <div className="dftcontainer" style={{ flexDirection: 'column', alignItems: 'start' }}>
                <div className="aboutcareer" style={{ justifyContent: 'center', padding: '15px 0 0 30px' }}>
                    <div>
                        <div onClick={() => player?.finaldata[0]?.team_cs && navigate(`/team/${player?.finaldata[0]?.team_cs?.id}`)}
                            className="teamimg ava"
                            style={{ backgroundImage: `url(${player?.finaldata[0]?.team_cs?.logo})` }}></div>
                        <img src={player?.finaldata[0]?.rank_cs?.image} alt="" className="rankcs btnabsolute" />
                    </div>
                    <div>
                        <div onClick={() => player?.finaldata[0]?.team_dota && navigate(`/team/${player?.finaldata[0]?.team_dota?.id}`)}
                            className="teamimg ava"
                            style={{ backgroundImage: `url(${player?.finaldata[0]?.team_dota?.logo})` }}></div>
                        <img src={player?.finaldata[0]?.rank_dota?.image} alt="" className="rankdota btnabsolute" style={{ transform: 'translate(0, 8px)' }} />
                    </div>
                </div>
            </div>
        </CenterPlate>
    );
}

const Cups = ({ cups }: { cups: any }) => {
    return (
        <CenterPlate>
            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0' }}>
                <div className="trophy">
                    {cups?.length ?
                        cups.map((item: any) => (
                            <img src={item?.image} alt="" key={item?.id} style={{ maxWidth: '65px' }} />
                        ))
                        :
                        <div className="dftcontainer">
                            <p>нет кубков</p>
                        </div>
                    }
                </div>
            </div>
        </CenterPlate>
    );
}