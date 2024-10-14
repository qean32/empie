import { useNavigate } from "react-router";
import useRequest from "../../customHooks/useRequest";
import { TEAMServices } from "../../services/TEAMServices";


export const TopTeamChild = ({ }: {}) => {
    const navigate = useNavigate()
    const teamstop = useRequest(() => TEAMServices.GETTeamShort(0, '', 3), ['teamstop'])
    return (
        <div className="topteam rightcontainer" style={{ padding: '15px' }}>
            <p>кол-во побед</p>
            <div>
                {teamstop && teamstop.finaldata.map((item: any) =>
                    <div onClick={() => navigate(`/team/${item.id}`)} key={item.id} style={{ backgroundImage: `url(${item?.logo})` }}></div>
                )}
            </div>
        </div>
    );
}