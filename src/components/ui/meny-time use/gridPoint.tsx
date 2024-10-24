import { useNavigate } from "react-router";

export const GridPoint = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    return (
        <div className="gridpoint" onClick={() => navigate(`/meeting/${item?.id}`)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '16px', padding: '5px 10px 2px 10px' }}>
                <img src={item?.team_one?.logo ? `${item?.team_one?.logo}` : '/svg/dragon.svg'} alt="" id="imgteamlogo" style={{ transform: 'translateX(-2px)' }} />
                vs
                <img src={item?.team_one?.logo ? `${item?.team_two?.logo}` : '/svg/dragon.svg'} alt="" id="imgteamlogo" style={{ transform: 'translateX(2px)' }} />
            </div>
            <span className="line" style={{ position: 'static', backgroundColor: '#00000030', height: '2px' }}></span>
            <div><p id="nametextteam">{item?.team_one?.name}</p><p>{item?.team_one_score}</p></div>
            <div><p id="nametextteam">{item?.team_two?.name}</p><p>{item?.team_two_score}</p></div>
        </div>
    );
}