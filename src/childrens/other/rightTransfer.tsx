import useRequest from "../../customHooks/useRequest";
import { TRANSFERServices } from "../../services/TRANSFERServices copy";
import { Transfer } from "../pages/main/transfers";


export const RightTransferChild = ({ }: {}) => {
    const lasttransfer = useRequest(() => TRANSFERServices.GETTransfer(0, 1), ['lasttransfer'])
    return (
        <div className="rightcontainer">
            <Transfer item={lasttransfer.finaldata[0]} />
        </div>
    );
}