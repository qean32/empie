import { useNavigate } from "react-router";

type Props = {

}
export const InlinePrezent = ({ }: Props) => {
    return (
        <div><div className="ava"></div><p>name name</p></div>
    );
}


type Props_ = {

}
export const InlineUser = ({ }: Props_) => {
    const navigate = useNavigate()

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/profile/2`)}>
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
    const navigate = useNavigate()

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/team/2`)}>
            <InlinePrezent />
            <section>
                <img src="/svg/flag.svg" alt="" /> <p>7</p>
                <img src="/svg/cup.svg" alt="" /> <p>8</p>
            </section>
        </div>
    );
}

