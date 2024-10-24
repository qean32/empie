import { useNavigate } from "react-router";
import useRequest from "../../../customHooks/useRequest";
import { APPLICATIONServices } from "../../../services/APPLICATIONServices";
import { MATCHServices } from "../../../services/MATCHServices";
import { memo } from "react";
export const InlineUser = ({ item }: { item: any }) => {
    const navigate = useNavigate()

    if (item?.user) return (
        <div className="inline-conteiner" onClick={() => navigate(`/profile/${item?.user?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${item?.user?.ava})` }}></div><p>{item?.user?.first_name} {item?.user?.last_name}</p></div>
            <span>
                <img src={`${item?.rank_cs?.image}`} alt="" className="rankcs" style={{ width: '36px' }} />
                <img src={`${item?.rank_dota?.image}`} alt="" className="rankcs" style={{ width: '50px' }} />
            </span>
        </div>
    )
    return (
        <div className="inline-conteiner" onClick={() => navigate(`/profile/${item?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${item?.ava})` }}></div><p>{item?.first_name} {item?.last_name}</p></div>
        </div>
    )
}


export const InlineTeam = memo(({ item }: { item: any }) => {
    const navigate = useNavigate()
    const tournaments = useRequest(() => APPLICATIONServices.GETApplication('', item.id), [`wintournamentsteam${item.id}`])
    const matches = useRequest(() => MATCHServices.GETMatch('', 0, item.id), [`matchesteam${item.id}`])
    const matches_ = useRequest(() => MATCHServices.GETMatch('', 0, '', item.id), [`matchesteam_${item.id}`])

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/team/${item?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${item?.logo})` }}></div><p>{item?.name}</p></div>
            <section style={{ minHeight: '50px' }}>
                <img src="/svg/flag.svg" alt="" /> <p>{tournaments?.count}</p>
                <img src="/svg/cup.svg" alt="" /> <p>{matches?.count + matches_?.count}</p>
            </section>
        </div>
    );
})
