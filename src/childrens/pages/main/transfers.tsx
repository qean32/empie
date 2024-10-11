import { useRef } from "react"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import useDinamickPagination from "../../../customHooks/useDinamickPagination"
import { TRANSFERServices } from "../../../services/TRANSFERServices copy"



export const TransfersChild = ({ }: {}) => {
    const scrollRef: any = useRef()
    const transfers: any = useDinamickPagination(() => TRANSFERServices.GETTransfer(transfers.offset), scrollRef, 'transfers')

    return (
        <>
            <SmallCenterPlate>
                <div className="transfers">

                    {transfers && transfers.finaldata.map((el: any) => (
                        <Transfer />
                    ))}

                    <div ref={scrollRef} className="scrollhandlerref"></div>
                </div>
            </SmallCenterPlate>
        </>
    );
}


const Transfer = ({ }: {}) => {
    return (
        <div className="transfer"><i>Сашка Бирюков</i> покинул команду <i>Астартес</i></div>
    )
}