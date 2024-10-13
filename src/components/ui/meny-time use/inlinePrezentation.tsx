import { useNavigate } from "react-router";
export const InlineUser = ({ el }: { el: any }) => {
    const navigate = useNavigate()

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/profile/${el?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${el?.ava})` }}></div><p>{el?.first_name} {el?.last_name}</p></div>
            <span>
                <img src="" alt="" />
                <img src="" alt="" />
            </span>
        </div>
    );
}


export const InlineTeam = ({ el }: { el: any }) => {
    const navigate = useNavigate()

    return (
        <div className="inline-conteiner" onClick={() => navigate(`/team/${el?.id}`)}>
            <div><div className="ava" style={{ backgroundImage: `url(${el?.logo})` }}></div><p>{el?.name}</p></div>
            <section style={{ minHeight: '50px' }}>
                <img src="/svg/flag.svg" alt="" /> <p>7</p>
                <img src="/svg/cup.svg" alt="" /> <p>8</p>
            </section>
        </div>
    );
}

