import { InputComent, LikeComent } from "../one-time use/InterfacePost";
import useBoolean from "../../../customHooks/useBoolean";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useOneRequest from "../../../customHooks/useRequest";
import { COMENTServices } from "../../../services/COMENTServices";
import { LIKEServices } from "../../../services/LIKEServices";
import { SomeContext } from "../../../context";
import { useMutation } from "react-query";
import useRequest from "../../../customHooks/useRequest";

export const Post = ({ item }: { item: any }) => {
    const { user }: any = useContext(SomeContext)
    const ulike = useBoolean(false)
    const ucoment = useBoolean(false)
    const viewcoments = useBoolean(false)

    const coments = useOneRequest(() => COMENTServices.GETComent(item.id), [`coments${item.id}`])
    const coment = useOneRequest(() => COMENTServices.GETComent(item.id, 0,), [`coments${item.id}`])

    const likes = useRequest(() => LIKEServices.GETLike(item.id), [`likes${item.id}`])
    const like = useRequest(() => LIKEServices.GETLike(item.id, user?.user_id), [`like${item.id}`])
    // const golike = useMutation('golike', () => LIKEServices.CREATELike({ author: user?.user_id }))
    const [countLike, setCountLike] = useState<number>(0)

    useEffect(() => {
        if (likes.count) {
            setCountLike(likes.count)
        }
    }, [likes.count])

    useEffect(() => {
        if (coment.finaldata[0]) {
            ucoment.on()
        }
    }, [coment.finaldata[0]])

    useEffect(() => {
        if (like.count) {
            ulike.on()
        }
    }, [like.count])


    const navigate = useNavigate()

    const LikeHandler = () => {
        ulike.SwapFn()

        if (!ulike.boolean) {
            setCountLike((prev: number) => prev + 1)
        } else {
            setCountLike((prev: number) => prev - 1);
        }
    }

    return (
        <div className="dftcontainer" style={{ flexDirection: 'column' }}>
            <div className="post" style={{ padding: '20px' }}>
                <div>
                    <div className="postsimg"><div className="ava" onClick={() => navigate('/profile/2')}></div><img src="" alt="" className="postimg" /></div>
                </div>
                <div>
                    <p> {item?.content} </p>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'end', padding: '0 -20px 0 0' }}>
                    <LikeComent islike={true} value={ulike.boolean} fn={LikeHandler} count={countLike} />
                    <LikeComent islike={false} value={ucoment.boolean} fn={viewcoments.SwapFn} count={coments.finaldata.length} />
                </div>
            </div>
            <div className="coments" style={viewcoments.boolean ? { maxHeight: 'calc(anchor-size(--myAnchor self-block, 250px) + 2em)' } : { maxHeight: '0' }}>
                <div>
                    <div style={{ padding: '0 0 0 30px' }}>
                        <InputComent value={""} setValue={() => undefined} title={"ваш коментарий.."} />
                    </div>
                    {coments && coments.finaldata.map((item) => <Coment item={item} key={item.id} />)}
                </div>
            </div>
        </div>
    );
}

export const Coment = ({ item }: { item: any }) => {
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