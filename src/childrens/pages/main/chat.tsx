import { useContext, useRef, useState } from "react"
import { colors } from "../../../exports"
import { CenterPlate } from "../../../components/hoc/plates/centerPlate"
import { InputComent } from "../../../components/ui/one-time use/InterfacePost"
import { useNavigate } from "react-router"
import { SomeContext } from "../../../context"



export const ChatChild = ({ }: {}) => {
    const [masseges, setMesseges] = useState<any[]>([])
    const chatRef: any = useRef()
    const handlerRef: any = useRef()
    const [message, setMessage] = useState<string>('')

    const chatSocket = new WebSocket('ws://127.0.0.1:8000/ws/');

    chatSocket.onclose = function () {
        console.log('onclose')
    }

    return (
        <>
            <CenterPlate>
                <div className="dftcontainer" style={{ padding: '20px 40px 10px 40px' }}>
                    <div className="chat">
                        <div className="chatwindow" ref={chatRef}>

                            {masseges.length > 0 && masseges.map((item: any) => (
                                <Message item={item} key={item.id} />
                            ))}

                            <div ref={handlerRef} className="scrollhandlerref"></div>
                        </div>
                        <form style={{ padding: '20px 0 0 20px' }}
                            onSubmit={() => undefined}>
                            <InputComent value={message} setValue={setMessage} title={"ваше сообщение.."} submit={() => undefined} /></form>
                    </div>
                </div>
            </CenterPlate>
        </>
    );
}


export const Message = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    const { user }: any = useContext(SomeContext)
    return (
        <div className="message" style={item.author?.id == user?.user_id ? { transform: 'scale(-1, 1)' } : {}}>
            <div className="ava" style={{ backgroundImage: `url(${item?.author?.ava})` }}
                onClick={() => navigate(`/profile/${item?.author?.id}`)}></div>
            <div className="messagecontext" style={item.author?.id == user?.user_id ? { transform: 'scale(-1, 1)' } : {}}>
                <p style={{ color: `${colors.maincolor}`, transform: 'translate(0, -10px)', cursor: 'pointer' }}
                    onClick={() => navigate(`/profile/${item?.author?.id}`)}>
                    {item?.author?.first_name} {item?.author?.first_name}
                </p>
                <p>{item?.content}</p>
            </div>
        </div>
    );
}