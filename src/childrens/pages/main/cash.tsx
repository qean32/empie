import { memo, useState } from "react";
import useDinamicPagination from "../../../customHooks/useDinamicPagination";
import { arrey } from "../../../functions/GiveConst";
import { FullPlate } from "../../../components/hoc/plates/fullPlate";

type Props = {

}
export const CashChild = ({ }: Props) => {
    const [cash, setCash] = useState<any[]>([{}, {}])

    const ref = useDinamicPagination(() => setCash((prev: any) => [...prev, ...arrey]))
    return (
        <>
            <FullPlate>
                <div style={{ padding: '100px 0 0 0' }}>
                    <CashHeader />

                    {cash.map((el, index) => (
                        <DftCash key={index} />
                    ))}

                    <div ref={ref} className="scrollhandlerref"></div>
                </div>
            </FullPlate>
        </>
    );
}

type PropsDftCash = {

}
export const DftCash = ({ }: PropsDftCash) => {
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

type PropsCashheader = {

}
export const CashHeader = memo(({ }: PropsCashheader) => {
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