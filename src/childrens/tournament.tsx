import { useNavigate } from "react-router";

type Props = {

}
export const TournamentChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div style={{ justifyContent: 'space-between' }} className="alightcenter" onClick={() => navigate(`/tournament/2`)}>
            <p style={{ width: '80%' }}>попытка номер два</p>
            <p>ДОПЗ: 14.05</p>
        </div>
    );
}