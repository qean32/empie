type Props = {

}
export const InlinePrezent = ({ }: Props) => {
    return (
        <div><div className="ava"></div><p>username</p></div>
    );
}


type Props_ = {

}
export const InlineUser = ({ }: Props_) => {
    return (
        <div className="inline-conteiner">
            <InlinePrezent />
            <span>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </span>
        </div>
    );
}


type Props__ = {

}
export const InlineTeam = ({ }: Props__) => {
    return (
        <div className="inline-conteiner">
            <InlinePrezent />
            <section>
                <img src="/svg/flag.svg" alt="" /> <p>7</p>
                <img src="/svg/cup.svg" alt="" /> <p>8</p>
            </section>
        </div>
    );
}

