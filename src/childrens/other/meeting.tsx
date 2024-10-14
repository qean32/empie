import { useNavigate } from "react-router";


export const MeetingChild = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    return (
        <div className="dftcontainer" onClick={() => navigate(`/meeting/${item?.id}`)} style={{ padding: '15px 0', cursor: 'pointer' }}>
            <div style={{ justifyContent: 'space-between', display: 'flex', width: '100%', padding: '0 30px' }}>
                <div className="teamvstam">
                    <p>{item?.team_one?.name}</p><div style={{ display: 'flex', gap: '10px' }}><p>
                        {item?.team_one_ball ? item?.team_one_ball : item?.team_one_score} : {item?.team_two_ball ? item?.team_two_ball : item?.team_two_score}
                    </p></div><p>{item?.team_two?.name}</p>
                </div>
                <div className="aboutmeet">
                    <p>{item?.date}</p>
                    <p>b0{item?.countmatch}</p>
                    {item?.is_qualification && <p>квалификация</p>}
                </div>
            </div>
        </div>
    );
}