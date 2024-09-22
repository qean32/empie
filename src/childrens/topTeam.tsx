import { useNavigate } from "react-router";

type Props = {

}
export const TopTeamChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="topteam rightcontainer" style={{padding: '20px 20px'}}>
            <p>кол-во побед</p>
            <div>
                <div onClick={() => navigate(`/team/2`)}></div>
                <div onClick={() => navigate(`/team/2`)}></div>
                <div onClick={() => navigate(`/team/2`)}></div>
                <div onClick={() => navigate(`/team/2`)}></div>
            </div>
        </div>
    );
}