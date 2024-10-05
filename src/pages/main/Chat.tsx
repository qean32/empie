import { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { InputComent } from "../../components/ui/one-time use/InterfacePost";
import { arrey, colors } from "../../functions/GiveConst";

type Props = {

}
export const Chat = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const [masseges, setMesseges] = useState<any[]>([{}, {}, {}, {}, {}])
    const chatRef: any = useRef()
    const handlerRef: any = useRef()
    ChangeTitle("чат")

    const [boolean, setBoolean] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setMesseges((prev: any) => [...prev, arrey])
        }, 600);
    }, [boolean])

    useEffect(() => {
        console.log(handlerRef)
        console.log(chatRef)
    }, [])

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: any = chatRef.current
        const node_: any = handlerRef.current

        const fn = () => {
            if (node_.getBoundingClientRect().top < 120) {
                on()
            }
            else {
                off()
            }
        }

        node.addEventListener('scroll', fn)

        return function () {
            node.removeEventListener('scroll', fn)
        }
    }, [])

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
                        <CenterPlate>
                            <div className="dftcontainer" style={{ padding: '20px 40px' }}>
                                <div className="chat">
                                    <div className="chatwindow" ref={chatRef}>
                                        {masseges.map(() => (
                                            <Message elem={{ isorg: false }} />
                                        ))}
                                        <div ref={handlerRef} className="scrollhandlerref"></div>
                                    </div>
                                    <form style={{ transform: 'translate(0, 2vh)' }}><InputComent value={""} setValue={() => undefined} title={"ваше сообщение.."} /></form>
                                </div>
                            </div>
                        </CenterPlate>
                    </Center>
                    <Right>
                        <RightPanel><div className="dftcontainer"></div></RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}

type Props_ = {
    elem: any
}
export const Message = ({ elem }: Props_) => {
    return (
        <div className="message" style={elem.isorg ? { transform: 'scale(-1, 1)' } : {}}>
            <div className="ava"></div>
            <div className="messagecontext" style={elem.isorg ? { transform: 'scale(-1, 1)' } : {}}>
                <p style={{ color: `${colors.maincolor}`, transform: 'translate(0, -10px)' }}>name </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. aperiam unde saepe a explicabo?</p>
            </div>
        </div>
    );
}