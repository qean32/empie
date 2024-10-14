import { useContext, useRef } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import Repair from "../../../components/ui/meny-time use/repair";
import { OFFERServices } from "../../../services/OFFERServices";
import useRequest from "../../../customHooks/useRequest";
import { SomeContext } from "../../../context";



export const OffersChild = ({ }: {}) => {
    const { user }: any = useContext(SomeContext)
    const offers: any = useRequest(() => OFFERServices.GETOffer(user.user_id), ['offers'])

    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ flexDirection: 'column', alignItems: 'normal', minHeight: '500px', justifyContent: 'start', padding: '40px 0 0 0' }}>
                    {offers.finaldata.length > 0 ?
                        <>

                            {offers && offers.finaldata.map((item: any) => (
                                <DftOffer item={item} key={item.id} />
                            ))}
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


export const DftOffer = ({ item }: { item: any }) => {

    return (
        <div className="offer">
            <div><img src="./svg/dota.svg" alt="" /> <div className="ava" style={{ backgroundImage: `url(${item?.team?.logo})` }} /> <p>{item?.team?.name}</p></div>
            <Button title="принять" function_={() => undefined} />
        </div>
    );
}