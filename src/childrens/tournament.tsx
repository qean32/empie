import { useNavigate } from "react-router";

type Props = {

}
export const TournamentChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div style={{ justifyContent: 'space-between' }} className="container" onClick={() => navigate(`/tournament/2`)}>
            <p>попытка номер два</p>
            <p>ДОПЗ: 14.05</p>
        </div>
    );
}