import { useNavigate } from "react-router";

type Props = {

}
export const RightTransferChild = ({ }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="rightcontainer" style={{padding: '10px 0 '}}>
            <div style={{ padding: '0 27px' }}><i onClick={() => navigate(`/profile/2`)}>Сашка Бирюков</i> покинул команду <i onClick={() => navigate(`/team/2`)}>Астартес</i></div>
        </div>
    );
}