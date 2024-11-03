import React, { useContext, useState } from "react"
import { colors } from "../../../exports"
import { LIKEServices } from "../../../services/LIKEServices"
import { SomeContext } from "../../../context"
import { useMutation } from "react-query"
import useUserInfo from "../../../customHooks/useUserInfo"


export const InputComent = ({ value, setValue, title, submit }: {
    value: string
    setValue: Function
    title: string
    submit: React.MouseEventHandler<HTMLImageElement>
}) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    return (
        <div style={{ width: `70%`, position: 'relative' }}>
            <input type="text" name="" id="" value={value} onChange={changeHandler} placeholder={`${title}`} />
            <img src="/svg/send.svg" alt="" style={{ position: 'absolute', top: '1.6vh', right: '-12vh', cursor: "pointer" }} onClick={submit} />
        </div>
    );
}


export const ShellLikeComent =
    ({ islike, value, fn, count }:
        {
            islike: boolean
            value: boolean
            fn: Function
            count: number
        }
    ) => {
        return (
            <div className="likecoment" style={!value ? { transition: '.2s' } : { outline: `2px solid ${colors.maincolor}`, transition: '.4s' }} onClick={() => fn()}>
                {
                    islike ? <>{!value ? <img src="/svg/like.svg" /> : <img src="/svg/like_.svg" />}</> : <>{!value ? <img src="/svg/coment.svg" /> : <img src="/svg/coment_.svg" />}</>
                }
                <p style={!value ? { transition: '.4s' } : { color: colors.maincolor, transition: '.4s' }}> {count} </p>
            </div>
        );
    }


const HOCLike = ({ islike, value, fn, count, likeid, postid }:
    {
        islike: boolean
        value: boolean
        fn: Function
        count: number
        likeid: number
        postid: number
    }
) => {

    const [stateLike, setStateLike] = useState<any>()
    const { userinfo }: any = useUserInfo()

    const createLike = useMutation(() => LIKEServices.CREATELike({ author: user.user_id, post: postid })
        .then((results: any) => setStateLike(results.id)))
    const deleteLike = useMutation(() => LIKEServices.DELETELike(likeid ? likeid : stateLike))

    const { user, modalregistration }: any = useContext(SomeContext)

    const fn_ = () => {
        fn();
        
        if (userinfo)
            !value ?
        createLike.mutate()
        :
                deleteLike.mutate()
        else
            modalregistration.on()

    }

    // позже заменить на запрос с задержкой с возможнотью отмены

    return (
        <ShellLikeComent islike={islike} value={value} fn={fn_} count={count} />
    );
}

export default HOCLike;