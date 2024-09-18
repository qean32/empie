type Props = {
    fn1: Function
    fn2: Function
    fn3: Function
}
export const RightPanelChildren = ({ fn1, fn2, fn3 }: Props) => {
    return (
        <div>
            <div className="rightpanellink" onClick={() => fn1()}>турниры</div>
            <div className="rightpanellink">игроки</div>
            <div className="rightpanellink" onClick={() => fn2()}>команды</div>
            <div className="rightpanellink" onClick={() => fn3()}>матчи</div>
        </div>
    );
}

type Props_ = {

}
export const RightPanelDirectionChildren = ({ }: Props_) => {
    return (
        <div>
            <div className="rightpanellink">турниры</div>
            <div className="rightpanellink">матчи</div>
            <div className="rightpanellink">новости</div>
            <div className="rightpanellink">игроки</div>
            <div className="rightpanellink">команды</div>
            {/* <div>протоколы</div> */}
        </div>
    );
}