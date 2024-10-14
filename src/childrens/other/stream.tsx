import Repair from "../../components/ui/meny-time use/repair";


export const StreamChild = ({ }: {}) => {
    return (
        <div className="rightcontainer positioncenterbyflex" style={{padding: '40px 0', gap: '20px'}}>
            <Repair />
            <p>стрим не идет</p>
        </div>
    );
}