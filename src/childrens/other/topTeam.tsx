import { useNavigate } from "react-router";
import useRequest from "../../customHooks/useRequest";
import { TEAMServices } from "../../services/TEAMServices";

type Props = {

}
export const TopTeamChild = ({ }: Props) => {
    const navigate = useNavigate()
    const teamstop = useRequest(() => TEAMServices.GETTeamShort(0), 'teamstop')
    return (
        <div className="topteam rightcontainer" style={{ padding: '15px' }}>
            <p>кол-во побед</p>
            <div>
                {teamstop && teamstop.finaldata.map((el: any) =>
                    <div onClick={() => navigate(`/team/${el.id}`)} key={el.id} style={{ backgroundImage: `url(${el?.logo})` }}></div>
                )}
            </div>
        </div>
    );
}