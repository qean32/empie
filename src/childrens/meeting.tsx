import { useNavigate } from "react-router";

type Props = {

}
export const MeetingChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div style={{ justifyContent: 'space-between', padding: '10px 30px' }} className="container" onClick={() => navigate(`/meeting/2`)}>
            <div className="teamvstam">
                <p>zxcclown</p><div style={{display: 'flex', gap: '10px'}}><p>2:40</p><img src="" alt="" /></div><p>RAKUZAN</p>
            </div>
            <div className="aboutmeet">
                <p>04.04.24</p>
                <p>b03</p>
                {/* <p>квалификация</p> */}
            </div>
        </div>
    );
}