import { useNavigate } from "react-router";


export const TournamentChild = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    return (
        <div className="dftcontainer" onClick={() => navigate(`/tournament/${item.id}`)} style={{ cursor: 'pointer', padding: '25px 0' }}>
            <div style={{ justifyContent: 'space-between', display: 'flex', width: '100%', padding: '0 32px' }}>
                <p>{item?.name}</p>
                <p>ДОПЗ: {item?.date}</p>
            </div>
        </div>
    );
}