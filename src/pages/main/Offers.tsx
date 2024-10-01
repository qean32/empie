import { useContext, useEffect, useRef, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import useBoolean from "../../customHooks/useBoolean";
import ChangeTitle from "../../functions/ChangeTitle";
import { Button } from "../../components/ui/meny-time use/customButton";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import Repair from "../../components/ui/meny-time use/repair";
import useHandlerScroll from "../../customHooks/useHandlerScroll";
import { arrey } from "../../functions/GiveConst";

type Props = {

}
export const Offers = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const [offers, setOffers] = useState<any[]>([])

    const scrollRef = useRef<any>()
    const HandlerScroll = useHandlerScroll(scrollRef)

    useEffect(() => {
        console.log(scrollRef, HandlerScroll)
        if (HandlerScroll) {
            setTimeout(() =>
                setOffers((prew: any[]) => [...prew, ...arrey])
                , 600)
        }
    }, [HandlerScroll])

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)


    ChangeTitle('приглашения')
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
            {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
            {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <LeftPanel function_={modal.SwapFn} />
                <Center>
                    <SmallCenterPlate>
                        <div className="dftcontainer" style={{ flexDirection: 'column', alignItems: 'normal', minHeight: '500px', justifyContent: 'start', padding: '40px 0 0 0' }}>
                            {offers.length > 0 ?
                                <>
                                    {offers.map((el, index) => (
                                        <DftOffer key={index} />
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
                </Center>
                <Right>
                    <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
                </Right>
            </div>
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