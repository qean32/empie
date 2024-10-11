import { useNavigate } from "react-router";

type Props = {
    el: any
}
export const MeetingChild = ({ el }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="dftcontainer" onClick={() => navigate(`/meeting/${el?.id}`)} style={{ padding: '15px 0', cursor: 'pointer' }}>
            <div style={{ justifyContent: 'space-between', display: 'flex', width: '100%', padding: '0 30px' }}>
                <div className="teamvstam">
                    <p>{el?.team_one?.name}</p><div style={{ display: 'flex', gap: '10px' }}><p>
                        {el?.team_one_ball ? el?.team_one_ball : el?.team_one_score} : {el?.team_two_ball ? el?.team_two_ball : el?.team_two_score}
                    </p></div><p>{el?.team_two?.name}</p>
                </div>
                <div className="aboutmeet">
                    <p>{el?.date}</p>
                    <p>b0{el?.countmatch}</p>
                    {el?.is_qualification && <p>квалификация</p>}
                </div>
            </div>
        </div>
    );
}