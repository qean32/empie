import { useNavigate } from "react-router";

export const GridPoint = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    return (
        <div className="gridpoint" onClick={() => navigate(`/meeting/${item?.id}`)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '16px', padding: '5px 10px 2px 10px' }}>
                <img src={`${item?.team_one?.logo}`} alt="" style={{ width: '30px', height: '20px', borderRadius: '2px' }} />
                vs
                <img src={`${item?.team_two?.logo}`} alt="" style={{ width: '30px', height: '20px', borderRadius: '2px' }} />
            </div>
            <span className="line" style={{ position: 'static', backgroundColor: '#00000030', height: '2px' }}></span>
            <div><p>{item?.team_one?.name}</p><p>{item?.team_one_score}</p></div>
            <div><p>{item?.team_two?.name}</p><p>{item?.team_two_score}</p></div>
        </div>
    );
}