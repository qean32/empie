import { useNavigate } from "react-router"


export const RightPanelChildren = ({ fn1, fn2, fn3 }: {
    fn1: Function
    fn2: Function
    fn3: Function
}) => {
    const navigate = useNavigate()

    return (
        <div className="rightcontainer">
            <div className="rightpanellink" onClick={() => fn1()}>турниры</div>
            <div className="rightpanellink" onClick={() => navigate(`/community`)}>игроки</div>
            <div className="rightpanellink" onClick={() => fn2()}>команды</div>
            <div className="rightpanellink" onClick={() => fn3()}>матчи</div>
        </div>
    );
}


export const RightPanelDirectionChildren = ({ direction }: { direction: number }) => {
    const navigate = useNavigate()

    return (
        <div className="rightcontainer">
            <div className="rightpanellink" onClick={() => navigate(`/tournaments/${direction}`)}>турниры</div>
            <div className="rightpanellink" onClick={() => navigate(`/meetings/${direction}`)}>матчи</div>
            <div className="rightpanellink" onClick={() => navigate(`/${direction}`)}>новости</div>
            <div className="rightpanellink" onClick={() => navigate(`/community`)}>игроки</div>
            <div className="rightpanellink" onClick={() => navigate(`/transfers/`)}>трансферы</div>
            <div className="rightpanellink" onClick={() => navigate(`/teams/${direction}`)}>команды</div>
            {/* <div>протоколы</div> */}
        </div>
    );
}