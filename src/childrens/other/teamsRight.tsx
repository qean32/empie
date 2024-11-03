import { useNavigate, useParams } from "react-router";
import { RightPanel } from "../../components/hoc/rightPanel";

const TeamsRightChaild = () => {
    const direction = useParams()
    const navigate = useNavigate()
    
    return (
        <>

            <RightPanel>
                <div className="rightcontainer">
                    <div className="rightpanellink" onClick={() => navigate(`/tournaments/${Number(direction.iddirection)}`)}>турниры</div>
                    <div className="rightpanellink" onClick={() => navigate(`/meetings/${Number(direction.iddirection)}`)}>матчи</div>
                    <div className="rightpanellink" onClick={() => navigate(`/${Number(direction.iddirection)}`)}>новости</div>
                    <div className="rightpanellink" onClick={() => navigate(`/community`)}>игроки</div>
                    <div className="rightpanellink" onClick={() => navigate(`/transfers/`)}>трансферы</div>
                    <div className="rightpanellink" onClick={() => navigate(`/teams/${Number(direction.iddirection)}`)}>команды</div>
                </div>
            </RightPanel>
            <RightPanel>
                <div className="rightcontainer">
                    <div className="rightpanellink"
                        onClick={() => navigate(`/regteam/${Number(direction.iddirection)}`)}>регистрация команды</div>
                </div>
            </RightPanel>
        </>
    );
}

export default TeamsRightChaild;