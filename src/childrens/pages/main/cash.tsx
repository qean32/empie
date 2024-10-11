import { memo, useRef } from "react";
import useDinamickPagination from "../../../customHooks/useDinamickPagination";
import { FullPlate } from "../../../components/hoc/plates/fullPlate";
import { CASHServices } from "../../../services/CASHServices";


export const CashChild = ({ }: {}) => {
    const scrollRef: any = useRef()
    const cash: any = useDinamickPagination(() => CASHServices.GETCash(cash.offset), scrollRef, 'cash')
    return (
        <>
            <FullPlate>
                <div style={{ padding: '100px 0 0 0' }}>
                    <CashHeader />

                    {cash && cash.finaldata.map((el: any) => (
                        <DftCash />
                    ))}

                    <div ref={scrollRef} className="scrollhandlerref"></div>
                </div>
            </FullPlate>
        </>
    );
}


export const DftCash = ({ }: {}) => {
    return (
        <>
            <div className="cashheader greencash" style={{ padding: '10px 30px' }} id={false ? 'redcash' : ''}>
                <div>+5000 ₽</div>
                <div>покупка мяча</div>
                <div>20.05.06</div>
                <div>dota</div>
            </div>
            <hr color="#262626" />
        </>
    );
}


export const CashHeader = memo(({ }: {}) => {
    return (
        <>
            <div className="cashheader">
                <div>вс 500 ₽</div>
                <div>история расхода</div>
                <div>дата <img src="/svg/calendar.svg" /></div>
                <div>дисциплина</div>
            </div>
            <hr color="#262626" />
        </>
    );
})