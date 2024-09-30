import Repair from "../components/ui/meny-time use/repair";

type Props = {

}
export const StreamChild = ({ }: Props) => {
    return (
        <div className="rightcontainer positioncenterbyflex" style={{padding: '40px 0', gap: '20px'}}>
            <Repair />
            <p>стрим не идет</p>
        </div>
    );
}