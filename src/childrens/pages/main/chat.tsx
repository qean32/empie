import { useContext, useEffect, useRef, useState } from "react"
import { colors, host } from "../../../exports"
import { CenterPlate } from "../../../components/hoc/plates/centerPlate"
import { InputComent } from "../../../components/ui/one-time use/InterfacePost"
import { useNavigate } from "react-router"
import { SomeContext } from "../../../context"
import useUserInfo from "../../../customHooks/useUserInfo"
import useWebSocket from "react-use-websocket"
import useBoolean from "../../../customHooks/useBoolean"



export const ChatChild = ({ }: {}) => {

    // ________________________________________________ //

    const chatRef: any = useRef()
    const handlerRef: any = useRef()
    const step = 14
    const switch_ = useBoolean(false)

    // ________________________________________________ //

    const [boolean, setBoolean] = useState<boolean>(false)
    const controller = new AbortController

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: any = chatRef.current
        const node_: any = handlerRef.current

        const fn = () => {
            if (node_.getBoundingClientRect().top > 115) {
                on()
            }
            else {
                off()
            }
        }

        node.addEventListener('scroll', fn, { signal: controller.signal })

        return function () {
            controller.abort()
        }

    }, [])

    // ________________________________________________ //

    const [offset, setOffset] = useState(0)

    const GETMessages = async () => {
        const response = await fetch(`${host}chat/search/message/?offset=${offset}&limit=14`)
        const data = await response.json()
        Array.isArray(data.results) && setMesseges((prev: any) => [...prev, ...data.results])
    }

    useEffect(() => {
        switch_.boolean && switch_.off()
    }, [offset])

    useEffect(() => {
        switch_.boolean && GETMessages()
    }, [switch_.boolean])

    useEffect(() => {
        if (boolean) {
            setTimeout(() => {
                setOffset((prev: number) => prev + step)
                switch_.on()
            }, 600)
        }
    }, [boolean])

    // ________________________________________________ //

    useEffect(() => {
        GETMessages()
    }, [])

    const [messages, setMesseges] = useState<any[]>([])
    const [message, setMessage] = useState<string>('')
    const { userinfo } = useUserInfo()
    const { modalregistration }: any = useContext(SomeContext)

    const { sendMessage, lastMessage }: any = useWebSocket('ws://127.0.0.1:8000/websocket/chat/')

    const SubmitHandler = (e: any) => {
        e.preventDefault()

        if (!userinfo) {
            modalregistration.on()
        } else {
            // setMesseges((prev: any) => [{ content: message, author: userinfo }, ...prev])
            message && sendMessage(JSON.stringify({ author: userinfo, content: message }))
            setMessage('');
        }
    };

    useEffect(() => {
        const fn = () => {
            lastMessage && setMesseges((prev: any) => [JSON.parse(lastMessage.data), ...prev])
            setOffset((prev: any) => prev + 1)
        }
        lastMessage && fn()
    }, [lastMessage]);

    return (
        <>
            <CenterPlate>
                <div className="dftcontainer" style={{ padding: '20px 40px 10px 40px' }}>
                    <div className="chat">
                        <div className="chatwindow" ref={chatRef}>

                            {messages.length > 0 && messages.map((item: any) => (
                                <Message item={item} key={item.id} />
                            ))}

                            <div ref={handlerRef} className="scrollhandlerref"></div>
                        </div>
                        <form style={{ padding: '20px 0 0 20px' }}
                            onSubmit={SubmitHandler}>
                            <InputComent value={message} setValue={setMessage} title={"ваше сообщение.."} submit={SubmitHandler} /></form>
                    </div>
                </div>
            </CenterPlate>
        </>
    );
}


const Message = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    const { user }: any = useContext(SomeContext)
    return (
        <div className="message" style={item.author?.id == user?.user_id ? { transform: 'scale(-1, 1)' } : {}}>
            <div className="ava" style={{ backgroundImage: `url(${item?.author?.ava})` }}
                onClick={() => navigate(`/profile/${item?.author?.id}`)}></div>
            <div className="messagecontext" style={item.author?.id == user?.user_id ? { transform: 'scale(-1, 1)' } : {}}>
                <p style={{ color: `${colors.maincolor}`, transform: 'translate(0, -10px)', cursor: 'pointer' }}
                    onClick={() => navigate(`/profile/${item?.author?.id}`)}>
                    {item?.author?.first_name} {item?.author?.last_name}
                </p>
                <p>{item?.content}</p>
            </div>
        </div>
    );
}