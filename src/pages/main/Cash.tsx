import { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { FullPlate } from "../../components/hoc/plates/fullPlate";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import useHandlerScroll from "../../customHooks/useHandlerScroll";
import { arrey } from "../../functions/GiveConst";

type Props = {

}
export const Cash = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const [cash, setCash] = useState<any[]>([{}, {}])

    const scrollRef = useRef<any>()
    const HandlerScroll = useHandlerScroll(scrollRef)

    useEffect(() => {
        console.log(scrollRef)
        if (HandlerScroll) {
            setTimeout(() =>
                setCash((prew: any[]) => [...prew, ...arrey])
                , 600)
        }
    }, [HandlerScroll])

    ChangeTitle('расходы')
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>

                        <FullPlate>
                            <div style={{ padding: '100px 0 0 0' }}>
                                <div className="cashheader">
                                    <div>вс 500 ₽</div>
                                    <div>история расхода</div>
                                    <div>дата <img src="/svg/calendar.svg" /></div>
                                    <div>дисциплина</div>
                                </div>
                                <hr color="#262626" />


                                {cash.map((el, index) => (
                                    <DftCash key={index} />
                                ))}


                                <div ref={scrollRef} className="scrollhandlerref"></div>
                            </div>
                        </FullPlate>
                    </Center>
                    <Right>
                        <RightPanel><div className="dftcontainer"></div></RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}

type PropsDftCash = {

}
export const DftCash = ({ }: PropsDftCash) => {
    return (
        <>
            <div className="cashheader greencash" style={{ padding: '10px 30px' }} id={'' && 'redcash'}>
                <div>+5000 ₽</div>
                <div>покупка мяча</div>
                <div>20.05.06</div>
                <div>dota</div>
            </div>
            <hr color="#262626" />
        </>
    );
}