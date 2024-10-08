import { InputComent, LikeComent } from "../one-time use/InterfacePost";
import useBoolean from "../../../customHooks/useBoolean";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useOneRequest from "../../../customHooks/useOneRequest";
import { COMENTServices } from "../../../services/COMENTServices";

type Props = {
    el: any
}
export const Post = ({ el }: Props) => {
    const ulike = useBoolean(false)
    const ucoment = useBoolean(false)
    const viewcoments = useBoolean(false)
    const [countLike, setCountLike] = useState<number>(0)

    const coments = useOneRequest(() => COMENTServices.GETComent(el.id), `comsnt${el.id}`)
    const navigate = useNavigate()


    useEffect(() => {
        console.log(el.id)
        console.log(coments.finaldata, el.id)
    }, [coments])

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
                    <p> {el?.content} </p>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'end', padding: '0 10px 0 0' }}>
                    <LikeComent islike={true} value={ulike.boolean} fn={LikeHandler} count={countLike} />
                    <LikeComent islike={false} value={ucoment.boolean} fn={viewcoments.SwapFn} count={coments.finaldata.length} />
                </div>
            </div>
            <div className="coments" style={viewcoments.boolean ? { maxHeight: 'calc(anchor-size(--myAnchor self-block, 450px) + 2em)', padding: '30px 0 0 0' } : { maxHeight: '0' }}>
                <InputComent value={""} setValue={() => undefined} title={"ваш коментарий.."} />
                {coments && coments.finaldata.map((el) => <Coment el={el} key={el.id}/>)}
            </div>
        </div>
    );
}

type Props_ = {
    el: any
}
export const Coment = ({ el }: Props_) => {
    const navigate = useNavigate()
    return (

        <div className="postsimg" style={{ gap: '15px' }}>
            <div className="ava" onClick={() => navigate('/profile/2')}></div>
            <p style={{ maxWidth: '420px' }}>
                {el.content}
            </p>
        </div>
    );
}