import { useNavigate } from "react-router";
import { GridPoint } from "../components/ui/meny-time use/gridPoint";

type Props = {

}
export const MoveonGridChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="rightcontainer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }} onClick={() => navigate('/meeting/2')}>
            <div style={{ width: '70%', padding: '0 0 0 20px' }}>
                <GridPoint />
            </div>
        </div>
    );
}