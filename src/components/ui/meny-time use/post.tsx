import { InputComent, LikeComent } from "../one-time use/InterfacePost";
import useBoolean from "../../../customHooks/useBoolean";
import { useState } from "react";
import { useNavigate } from "react-router";

type Props = {

}
export const Post = ({ }: Props) => {
    const ulike = useBoolean(false)
    const ucoment = useBoolean(false)
    const viewcoments = useBoolean(false)
    const [countLike, setCountLike] = useState<number>(0)
    const [coments, setComents] = useState<any[]>([])
    const navigate = useNavigate()

    const LikeHandler = () => {
        ulike.SwapFn()
        if (!ulike.boolean) {
            setCountLike((prev: number) => prev + 1)
        } else { setCountLike((prev: number) => prev - 1) }
    }

    return (
        <div className="dftcontainer" style={{ padding: '20px 30px', flexDirection: 'column' }}>
            <div className="post">
                <div>
                    <div className="postsimg"><div className="ava" onClick={() => navigate('/profile/2')}></div><img src="" alt="" className="postimg" /></div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati rem! Dignissimos eveniet quisquam nulla obcaecati saepe  </p>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'end', padding: '0 10px 0 0' }}>
                    <LikeComent islike={true} value={ulike.boolean} fn={LikeHandler} count={countLike} />
                    <LikeComent islike={false} value={ucoment.boolean} fn={viewcoments.SwapFn} count={coments.length} />
                </div>
            </div>
            <div className="coments" style={viewcoments.boolean ? { maxHeight: 'calc(anchor-size(--myAnchor self-block, 450px) + 2em)', padding: '30px 0 0 0' } : { maxHeight: '0' }}>
                <InputComent value={""} setValue={() => undefined} title={"ваш коментарий.."} />
                <Coment />
                <Coment />
            </div>
        </div>
    );
}

type Props_ = {

}
export const Coment = ({ }: Props_) => {
    const navigate = useNavigate()
    return (

        <div className="postsimg" style={{ gap: '15px' }}>
            <div className="ava" onClick={() => navigate('/profile/2')}></div>
            <p style={{ maxWidth: '420px' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, magnam.sit amet consectetur adipisicing elit. Totam, magnam.
            </p>
        </div>
    );
}