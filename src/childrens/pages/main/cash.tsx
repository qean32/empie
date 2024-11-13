import { useRef } from "react";
import useDinamickPagination from "../../../customHooks/useDinamickPagination";
import { FullPlate } from "../../../components/hoc/plates/fullPlate";
import { CASHServices } from "../../../services/CASHServices";
import useRequest from "../../../customHooks/useRequest";


export const CashChild = ({ }: {}) => {
    const scrollRef: any = useRef()
    const cash: any = useDinamickPagination(() => CASHServices.GETCash(cash.offset), scrollRef, ['cashs'])
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
    return (
        <>
            <div className="cashheader greencash" style={{ padding: '10px 20px 10px 20px' }} id={item?.price < 0 ? 'redcash' : ''}>
                <div>{item?.price > 0 ? '+' : ''}{item?.price} ₽</div>
                <div style={{ width: '200px', textAlign: 'center' }}>{item?.content}</div>
                <div>{(item?.created_at).split(' ')[1]}</div>
                <div>{item?.direction?.direction_name}</div>
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
                <div>{cash?.finaldata[0]?.budget} ₽</div>
                <div>история расхода</div>
                <div>дата <img src="/svg/calendar.svg" /></div>
                <div>дисциплина</div>
            </div>
            <hr color="#262626" />
        </>
    );
}