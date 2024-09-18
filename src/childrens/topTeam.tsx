import { useNavigate } from "react-router";

type Props = {

}
export const TopTeamChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="topteam">
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