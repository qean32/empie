import { useRef } from "react";
import useDinamickPagination from "../../../customHooks/useDinamickPagination";
import { FullPlate } from "../../../components/hoc/plates/fullPlate";
import { CASHServices } from "../../../services/CASHServices";
import useRequest from "../../../customHooks/useRequest";
import { AdminSmallPanel } from "../../../components/hoc/plates/adminSmallPanel";
import { useMutation } from "react-query";
import { direction } from "../../../exports";


export const CashChild = ({ }: {}) => {
    const scrollRef: any = useRef()
    const cash: any = useDinamickPagination(() => CASHServices.GETCash(cash.offset), scrollRef, ['cashs'], 18)
    return (
        <>
            <FullPlate>
                <div style={{ padding: '100px 0 0 0' }}>
                    <CashHeader />

                    {cash && cash.finaldata.map((item: any) => (
                        <DftCash item={item} key={item.id} />
                    ))}

                    <div ref={scrollRef} className="scrollhandlerref"></div>
                </div>
            </FullPlate>
        </>
    );
}


export const DftCash = ({ item }: { item: any }) => {
    const cash = useRequest(() => CASHServices.GETBudget(), ['budget'])
    const craeteCash = useMutation(() => CASHServices.DELETECash(item.id)
        .catch(() => updateBudget.mutate()))
    const updateBudget = useMutation(() => CASHServices.UPDATEBudget({ budget: Number(cash.finaldata[0]?.budget) - Number(item.price) })
        .then(() => location.reload()))

    const DeleteHandler = () => {
        craeteCash.mutate()
    }
    return (
        <>
            <div className="cashheader greencash" style={{ padding: '10px 20px 10px 20px' }} id={item?.price < 0 ? 'redcash' : ''}>
                <div>{item?.price > 0 ? '+' : ''}{item?.price} ₽</div>
                <div style={{ width: '200px', textAlign: 'center' }}>{item?.content}</div>
                <div>{(item?.created_at).split(' ')[1]}</div>
                <div>{item?.direction?.direction_name}</div>
                <AdminSmallPanel>
                    <img src="/svg/delete.svg" alt="" onClick={DeleteHandler} style={{ cursor: 'pointer', position: 'absolute', left: '-23px', zIndex: '1000000' }} />
                </AdminSmallPanel>
            </div>
            <hr color="#262626" />
        </>
    );
}


export const CashHeader = ({ }: {}) => {
    const cash = useRequest(() => CASHServices.GETBudget(), ['budget'])

    return (
        <>
            <div className="cashheader">
                <div style={{ transform: 'translateX(20px)' }}>{cash?.finaldata[0]?.budget} ₽</div>
                <div>история расхода</div>
                <div>дата <img src="/svg/calendar.svg" /></div>
                <div>дисциплина</div>
            </div>
            <hr color="#262626" />
        </>
    );
}