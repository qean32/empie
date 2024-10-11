import { useNavigate } from "react-router";

export const GridPoint = ({ el }: { el: any }) => {
    const navigate = useNavigate()
    return (
        <div className="gridpoint" onClick={() => navigate('/meeting/2')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '16px', padding: '5px 10px 2px 10px' }}>
                <img src="/svg/dragon.svg" alt="" style={{ width: '20px' }} />
                <img src="/svg/dragon.svg" alt="" style={{ width: '20px' }} />
            </div>
            <span className="line" style={{ position: 'static', backgroundColor: '#00000030', height: '2px' }}></span>
            <div><p>Team Spirit</p><p>2</p></div>
            <div><p>ROKUZAN</p><p>1</p></div>
        </div>
    );
}