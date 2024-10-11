import { useRef } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import Repair from "../../../components/ui/meny-time use/repair";
import useDinamicPagination from "../../../customHooks/useDinamicPagination";
import { OFFERServices } from "../../../services/OFFERServices";


type Props = {

}
export const OffersChild = ({ }: Props) => {
    const scrollRef: any = useRef()
    const offers: any = useDinamicPagination(() => OFFERServices.GETOffer(offers.offset), scrollRef, 'offers')

    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', alignItems: 'normal', minHeight: '500px', justifyContent: 'start', padding: '40px 0 0 0' }}>
                    {offers.length > 0 ?
                        <>

                            {offers && offers.finaldata.map((el: any) => (
                                <DftOffer />
                            ))}

                            <div ref={scrollRef} className="scrollhandlerref"></div>
                        </> :
                        <div className="dftcontainer" style={{ flexDirection: 'column', gap: '40px' }}>
                            <Repair />
                            <p>у тебя нет активных приглашений, бро</p>
                        </div>
                    }
                </div>
            </SmallCenterPlate>
        </>
    );
}

type PropsDft = {

}
export const DftOffer = ({ }: PropsDft) => {
    return (
        <div className="offer">
            <div><img src="./svg/dota.svg" alt="" /> <img src="" alt="" className="ava" /> <p>ROKUZAN</p></div>
            <Button title="принять" function_={() => undefined} />
        </div>
    );
}