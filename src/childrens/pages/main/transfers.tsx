import { useRef } from "react"
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate"
import useDinamickPagination from "../../../customHooks/useDinamickPagination"
import { TRANSFERServices } from "../../../services/TRANSFERServices copy"
import { useNavigate } from "react-router"



export const TransfersChild = ({ }: {}) => {

    const scrollRef: any = useRef()
    const transfers: any = useDinamickPagination(() => TRANSFERServices.GETTransfer(transfers.offset), scrollRef, 'transfers')

    return (
        <>
            <SmallCenterPlate>
                <div className="transfers">

                    {transfers && transfers.finaldata.map((el: any) => (
                        <Transfer el={el} />
                    ))}

                    <div ref={scrollRef} className="scrollhandlerref"></div>
                </div>
            </SmallCenterPlate>
        </>
    );
}


export const Transfer = ({ el }: { el: any }) => {
    const navigate = useNavigate()

    return (
        <div style={{ padding: '0 27px' }}>
            <i onClick={() => navigate(`/profile/${el?.user?.id}`)}>
                {el?.user?.first_name} {el?.user?.last_name}</i> {el?.script?.content} <i onClick={() => navigate(`/team/${el?.id}`)}>
                {el?.team?.name}</i>
        </div>
    )
}