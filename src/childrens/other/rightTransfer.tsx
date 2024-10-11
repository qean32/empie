import { useNavigate } from "react-router";

type Props = {
    el: any
}
export const RightTransferChild = ({ el }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="rightcontainer" style={{ padding: '10px 0 ' }}>
            <div style={{ padding: '0 27px' }}><i onClick={() => navigate(`/profile/${el?.user?.id}`)}>
                {el?.user?.first_name} {el?.user?.last_name}
            </i> {el?.script} <i onClick={() => navigate(`/team/${el?.id}`)}>{el?.team?.name}</i></div>
        </div>
    );
}