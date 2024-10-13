import { useNavigate } from "react-router";
import useRequest from "../../../customHooks/useRequest";
import { APPLICATIONServices } from "../../../services/APPLICATIONServices";
import { MATCHServices } from "../../../services/MATCHServices";
export const InlineUser = ({ el }: { el: any }) => {
    const navigate = useNavigate()

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/profile/${el?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${el?.ava})` }}></div><p>{el?.first_name} {el?.last_name}</p></div>
            <span>
                <img src="" alt="" />
                <img src="" alt="" />
            </span>
        </div>
    );
}


export const InlineTeam = ({ el }: { el: any }) => {
    const navigate = useNavigate()
    const tournaments = useRequest(() => APPLICATIONServices.GETApplication('', el.id), `wintournamentsteam${el.id}`)
    const matches = useRequest(() => MATCHServices.GETMatch('', 0, el.id), `matchesteam${el.id}`)
    const matches_ = useRequest(() => MATCHServices.GETMatch('', 0, '', el.id), `matchesteam_${el.id}`)

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/team/${el?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${el?.logo})` }}></div><p>{el?.name}</p></div>
            <section style={{ minHeight: '50px' }}>
                <img src="/svg/flag.svg" alt="" /> <p>{tournaments?.count}</p>
                <img src="/svg/cup.svg" alt="" /> <p>{matches?.count + matches_?.count}</p>
            </section>
        </div>
    );
}

