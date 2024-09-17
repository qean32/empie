type Props = {
    fn1: Function
    fn2: Function
    fn3: Function
}
export const RightPanelChildren = ({ fn1, fn2, fn3 }: Props) => {
    return (
        <>
            <div onClick={() => fn1()}>турниры</div>
            <div>игроки</div>
            <div onClick={() => fn2()}>команды</div>
            <div onClick={() => fn3()}>матчи</div>
        </>
    );
}

type Props_ = {

}
export const RightPanelDirectionChildren = ({ }: Props_) => {
    return (
        <>
            <div>турниры</div>
            <div>матчи</div>
            <div>новости</div>
            <div>игроки</div>
            <div>команды</div>
            {/* <div>протоколы</div> */}
        </>
    );
}