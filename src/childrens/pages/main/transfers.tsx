import { useRef } from "react"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import useDinamickPagination from "../../../customHooks/useDinamickPagination"
import { TRANSFERServices } from "../../../services/TRANSFERServices copy"
import { useNavigate } from "react-router"



export const TransfersChild = ({ }: {}) => {

    const scrollRef: any = useRef()
    const transfers: any = useDinamickPagination(() => TRANSFERServices.GETTransfer(transfers.offset), scrollRef, ['transfers'])

    return (
        <>
            <SmallCenterPlate>
                <div className="transfers">

                    {transfers && transfers.finaldata.map((item: any) => (
                        <Transfer item={item} key={item.id} />
                    ))}

                    <div ref={scrollRef} className="scrollhandlerref"></div>
                </div>
            </SmallCenterPlate>
        </>
    );
}


export const Transfer = ({ item }: { item: any }) => {
    const navigate = useNavigate()

    return (
        <div style={{ padding: '0 27px' }}>
            <i onClick={() => navigate(`/profile/${item?.user?.id}`)}>
                {item?.user?.first_name} {item?.user?.last_name}</i> {item?.script?.content} <i onClick={() => navigate(`/team/${item?.id}`)}>
                {item?.team?.name}</i>
        </div>
    )
}