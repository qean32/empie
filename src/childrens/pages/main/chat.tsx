import { useContext, useEffect, useRef, useState } from "react"
import { colors } from "../../../exports"
import { CenterPlate } from "../../../components/hoc/plates/centerPlate"
import { InputComent } from "../../../components/ui/one-time use/InterfacePost"
import { MESSAGEServices } from "../../../services/MESSAGEServices"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router"
import { SomeContext } from "../../../context"
import useUserInfo from "../../../customHooks/useUserInfo"



export const ChatChild = ({ }: {}) => {
    const [masseges, setMesseges] = useState<any[]>([])
    const chatRef: any = useRef()
    const handlerRef: any = useRef()
    const [offset, setOffset] = useState<number>(0)
    const [message, setMessage] = useState<string>('')
    const RQdata = useQuery(['messages', offset], () => MESSAGEServices.GETMessage(offset))

    useEffect(() => {
        RQdata?.data?.results && setMesseges((prev: any) => [...prev, ...RQdata?.data?.results])
    }, [RQdata?.data?.results])

    const [boolean, setBoolean] = useState<boolean>(false)

    useEffect(() => {
        if (RQdata?.data?.next) {
            setTimeout(() => {
                setOffset((prev: number) => prev + 12)
            }, 600);
        }
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

    const { userinfo }: any = useUserInfo()

    const SubmitHandler = (e: any) => {
        const createmessage = useMutation(
            () => MESSAGEServices.CREATEMessage({ author: userinfo.id, content: message }))
        e.preventDefault()
        message && createmessage.mutate()
        setMesseges((prev: any) => [{ author: userinfo, content: message }, ...prev])
        setMessage('')
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
                            onSubmit={SubmitHandler}>
                            <InputComent value={message} setValue={setMessage} title={"ваше сообщение.."} submit={SubmitHandler} /></form>
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