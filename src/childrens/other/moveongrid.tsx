import { GridPoint } from "../../components/ui/meny-time use/gridPoint";
import useRequest from "../../customHooks/useRequest";
import { MEETINGServices } from "../../services/MEETINGServices";


export const MoveonGridChild = ({ }: {}) => {
    const meeting = useRequest(() => MEETINGServices.GETMeeting(0, '', 1), ['lastmeeting'])
    return (
        <div className="rightcontainer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            <div style={{ width: '70%', padding: '0 0 0 20px' }}>
                <div className="line" style={{ width: '200px' }}>
                    <div className="linevertical" style={{ height: '52px' }}></div>
                </div>
                <GridPoint item={meeting?.finaldata[0]} />
            </div>
        </div>
    );
}