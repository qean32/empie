import { useNavigate } from "react-router";

type Props = {

}
export const TournamentChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="dftcontainer" onClick={() => navigate(`/tournament/2`)} style={{ cursor: 'pointer' }}>
            <div style={{ justifyContent: 'space-between', display: 'flex', width: '100%', padding: '0 30px' }}>
                <p>попытка номер два</p>
                <p>ДОПЗ: 14.05</p>
            </div>
        </div>
    );
}