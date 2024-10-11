import { useRef } from "react"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import useDinamicPagination from "../../../customHooks/useDinamicPagination"
import { TRANSFERServices } from "../../../services/TRANSFERServices copy"


type Props = {

}
export const TransfersChild = ({ }: Props) => {
    const scrollRef: any = useRef()
    const transfers: any = useDinamicPagination(() => TRANSFERServices.GETTransfer(transfers.offset), scrollRef, 'transfers')

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

interface Props_ {

}
const Transfer = ({ }: Props_) => {
    return (
        <div className="transfer"><i>Сашка Бирюков</i> покинул команду <i>Астартес</i></div>
    )
}