import { useState } from "react"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import useDinamicPagination from "../../../customHooks/useDinamicPagination"
import { arrey } from "../../../functions/GiveConst"


type Props = {

}
export const TransfersChild = ({ }: Props) => {
    const [transfers, setTransfers] = useState<any[]>([{}, {}])

    const ref = useDinamicPagination(() => setTransfers((prev: any) => [...prev, ...arrey]))

    return (
        <>
            <SmallCenterPlate>
                <div className="transfers">
                    {transfers.map((el, index) => (
                        <Transfer key={index} />
                    ))}

                    <div ref={ref} className="scrollhandlerref"></div>
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