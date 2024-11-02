import HOCLike, { InputComent, ShellLikeComent } from "../one-time use/InterfacePost";
import useBoolean from "../../../customHooks/useBoolean";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useRequest from "../../../customHooks/useRequest";
import { COMENTServices } from "../../../services/COMENTServices";
import { LIKEServices } from "../../../services/LIKEServices";
import { SomeContext } from "../../../context";
import { useMutation } from "react-query";
import useUserInfo from "../../../customHooks/useUserInfo";

export const Post = ({ item }: { item: any }) => {
    const { user }: any = useContext(SomeContext)

    const viewcoments = useBoolean(false)
    const ulike = useBoolean(false)
    const ucoment = useBoolean(false)
    const likes = useRequest(() => LIKEServices.GETLike(item.id), [`likes${item.id}`])
    const like = useRequest(() => LIKEServices.GETLike(item.id, user?.user_id), [`like${item.id}`])
    const [countLike, setCountLike] = useState<number>(0)

    useEffect(() => {
        likes.count && setCountLike(likes.count)
    }, [likes.count])

    const coments = useRequest(() => COMENTServices.GETComent(item.id), [`coments${item.id}`])
    const coment = useRequest(() => COMENTServices.GETComent(item.id, 0,), [`coments${item.id}`])

    useEffect(() => {
        coment.finaldata[0] && ucoment.on()
    }, [coment.finaldata[0]])

    useEffect(() => {
        like.count && ulike.on()
    }, [like.count])

    const navigate = useNavigate()

    const LikeHandler = () => {
        ulike.SwapFn()

        ulike.boolean ?
            setCountLike((prev: number) => prev - 1)
            :
            setCountLike((prev: number) => prev + 1)
    }

    return (
        <div className="dftcontainer" style={{ flexDirection: 'column' }}>
            <div className="post" style={{ padding: '20px' }}>
                <div>
                    <div className="postsimg">
                        <div className="ava" onClick={() => navigate('/profile/2')} style={{backgroundImage: `url(${item?.author?.ava})`}}></div>
                        {item?.image && <img src={item?.image} alt="" style={{ maxWidth: '80%', borderRadius: '2px' }} />}
                    </div>
                </div>
                <div style={{ padding: '0 5px' }}>
                    <p> {item?.content} </p>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'end', padding: '0 -20px 0 0' }}>
                    <HOCLike islike={true} value={ulike.boolean}
                        fn={LikeHandler} count={countLike} likeid={like?.finaldata[0]?.id} postid={item?.id} />
                    <ShellLikeComent islike={false} value={ucoment.boolean} fn={viewcoments.SwapFn} count={coments.finaldata.length} />
                </div>
            </div>
            <Coments itemid={item.id} viewcoments={viewcoments} coments_={coments} />
        </div>
    );
}

const Coment = ({ item }: { item: any }) => {
    const navigate = useNavigate()
    return (
        <div className="postsimg" style={{ gap: '15px', padding: '20px 0 0 35px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div className="ava" onClick={() => navigate(`/profile/${item?.author?.id}`)} style={{ backgroundImage: `url(${item?.author?.ava})` }}></div>
                <p>{item?.author?.first_name} {item?.author?.last_name}</p>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div className="ava" style={{ opacity: 0 }}></div>
                <p style={{ maxWidth: '420px' }}>
                    {item.content}
                </p>
            </div>
        </div>
    );
}

const Coments = ({ itemid, viewcoments, coments_ }: { itemid: number, viewcoments: any, coments_: any }) => {
    const { userinfo }: any = useUserInfo()
    const { modalregistration }: any = useContext(SomeContext)

    const SubmitHandler = (e: any) => {
        e.preventDefault()
        if (userinfo)
            comentValue && createcomment.mutate()
        else 
            modalregistration.on()
    }

    const createcomment = useMutation('createcomment',
        () => COMENTServices.CREATEComent({ author: userinfo?.id, content: comentValue, post: itemid })
            .then(() => {
                coments_.setFinalData((prev: any) => [...prev, {
                    author: userinfo, content: comentValue, post: itemid
                }]); setComentValue('')
            }))

    const [comentValue, setComentValue] = useState<string>('')

    return (
        <div className="coments" style={viewcoments.boolean ? { maxHeight: 'calc(anchor-size(--myAnchor self-block, 250px) + 2em)' } : { maxHeight: '0' }}>
            <div>
                <form style={{ padding: '0 0 0 30px' }} onSubmit={SubmitHandler}>
                    <InputComent value={comentValue} setValue={setComentValue} title={"ваш коментарий.."} submit={SubmitHandler} />
                </form>
                {coments_ && coments_.finaldata.map((item: any) => <Coment item={item} key={item.id} />)}
            </div>
        </div>
    )
}