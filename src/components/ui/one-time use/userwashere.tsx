import { useNavigate } from "react-router";
import { ButtonDisabled, Button } from "../meny-time use/customButton";
import Repair from "../meny-time use/repair";
import { userwashereStorage } from "../../../exports";

const UserWasHereModal = ({ modalregistration }: { modalregistration: any }) => {
    const navigate = useNavigate()
    const undesirableClick = () => {
        modalregistration.off()
        localStorage.setItem(userwashereStorage, JSON.stringify({ userwashere: true }))
    }
    return (
        <div className="dftcontainer" style={{ flexDirection: 'column', gap: '40px', padding: '40px 20px' }}>
            <Repair />
            <p style={{ fontSize: '20px' }}>нет аккаунта?</p>
            <div style={{ display: 'flex', gap: '20px' }}>
                <ButtonDisabled title="позже" function_={undesirableClick} />
                <Button title="регистрация / вход" function_={() => navigate('/registration')} />
            </div>
        </div>
    );
}

export default UserWasHereModal;