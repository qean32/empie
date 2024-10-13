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

export const Post = ({ el }: { el: any }) => {
    // const { user }: any = useContext(SomeContext)
    // const ulike = useBoolean(false)
    // const ucoment = useBoolean(false)
    // const viewcoments = useBoolean(false)

    // const coments = useOneRequest(() => COMENTServices.GETComent(el.id), `coments${el.id}`)
    // const coment = useOneRequest(() => COMENTServices.GETComent(el.id, 0,), `coments${el.id}`)

    // const likes = useRequest(() => LIKEServices.GETLike(el.id), `likes${el.id}`)
    // const like = useRequest(() => LIKEServices.GETLike(el.id, user?.user_id), `like${el.id}`)
    // const golike = useMutation('golike', () => LIKEServices.CREATELike({ author: user?.user_id }))
    // const [countLike, setCountLike] = useState<number>(0)

    // useEffect(() => {
    //     if (likes.count) {
    //         setCountLike(likes.count)
    //     }
    // }, [likes.count])

    // useEffect(() => {
    //     if (coment.finaldata[0]) {
    //         ucoment.on()
    //     }
    // }, [coment.finaldata[0]])

    // useEffect(() => {
    //     if (like.count) {
    //         ulike.on()
    //     }
    // }, [like.count])


    // const navigate = useNavigate()

    // const LikeHandler = () => {
    //     ulike.SwapFn()

    //     if (!ulike.boolean) {
    //         setCountLike((prev: number) => prev + 1)
    //     } else {
    //         setCountLike((prev: number) => prev - 1);
    //     }
    // }

    return (
        <div className="dftcontainer" style={{ padding: '20px', flexDirection: 'column' }}>
            {/* <div className="post">
                <div>
                    <div className="postsimg"><div className="ava" onClick={() => navigate('/profile/2')}></div><img src="" alt="" className="postimg" /></div>
                </div>
                <div>
                    <p> {el?.content} </p>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'end', padding: '0 -20px 0 0' }}>
                    <LikeComent islike={true} value={ulike.boolean} fn={LikeHandler} count={countLike} />
                    <LikeComent islike={false} value={ucoment.boolean} fn={viewcoments.SwapFn} count={coments.finaldata.length} />
                </div>
            </div>
            <div className="coments" style={viewcoments.boolean ? { maxHeight: 'calc(anchor-size(--myAnchor self-block, 250px) + 2em)', padding: '30px 0 0 0' } : { maxHeight: '0' }}>
                <InputComent value={""} setValue={() => undefined} title={"ваш коментарий.."} />
                {coments && coments.finaldata.map((el) => <Coment el={el} key={el.id} />)}
            </div> */}
        </div>
    );
}

export const Coment = ({ el }: { el: any }) => {
    const navigate = useNavigate()
    return (
        <div className="postsimg" style={{ gap: '15px' }}>
            <div className="ava" onClick={() => navigate(`/profile/${el?.author?.id}`)} style={{ backgroundImage: `url(${el?.author?.ava})` }}></div>
            <p style={{ fontSize: '12' }}>
                {el?.author?.first_name} {el?.author?.last_name}
            </p>
            <p style={{ maxWidth: '420px' }}>
                {el.content}
            </p>
        </div>
    );
}