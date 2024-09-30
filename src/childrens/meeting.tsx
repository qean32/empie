import { useNavigate } from "react-router";

type Props = {

}
export const MeetingChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="dftcontainer" onClick={() => navigate(`/meeting/2`)} style={{ padding: '15px 0', cursor: 'pointer' }}>
            <div style={{ justifyContent: 'space-between', display: 'flex', width: '100%', padding: '0 30px' }}>
                <div className="teamvstam">
                    <p>zxcclown</p><div style={{ display: 'flex', gap: '10px' }}><p>2:40</p><img src="" alt="" /></div><p>RAKUZAN</p>
                </div>
                <div className="aboutmeet">
                    <p>04.04.24</p>
                    <p>b03</p>
                    {/* <p>квалификация</p> */}
                </div>
            </div>
        </div>
    );
}