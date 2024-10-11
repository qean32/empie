import { useEffect, useRef, useState } from "react"
import { arrey, colors } from "../../../functions/GiveConst"
import { CenterPlate } from "../../../components/hoc/plates/centerPlate"
import { InputComent } from "../../../components/ui/one-time use/InterfacePost"



export const ChatChild = ({ }: {}) => {
    const [masseges, setMesseges] = useState<any[]>([{}, {}, {}, {}, {}])
    const chatRef: any = useRef()
    const handlerRef: any = useRef()

    const [boolean, setBoolean] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setMesseges((prev: any) => [...prev, arrey])
        }, 600);
    }, [boolean])

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
            <CenterPlate>
                <div className="dftcontainer" style={{ padding: '20px 40px' }}>
                    <div className="chat">
                        <div className="chatwindow" ref={chatRef}>
                            {masseges.map(() => (
                                <Message el={{ isorg: false }} />
                            ))}
                            <div ref={handlerRef} className="scrollhandlerref"></div>
                        </div>
                        <form style={{ transform: 'translate(0, 2vh)' }}><InputComent value={""} setValue={() => undefined} title={"ваше сообщение.."} /></form>
                    </div>
                </div>
            </CenterPlate>
        </>
    );
}


export const Message = ({ el }: { el: any }) => {
    return (
        <div className="message" style={el.isorg ? { transform: 'scale(-1, 1)' } : {}}>
            <div className="ava"></div>
            <div className="messagecontext" style={el.isorg ? { transform: 'scale(-1, 1)' } : {}}>
                <p style={{ color: `${colors.maincolor}`, transform: 'translate(0, -10px)' }}>name </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. aperiam unde saepe a explicabo?</p>
            </div>
        </div>
    );
}