import React from "react"
import { colors } from "../../../functions/GiveConst"

type Props = {
    value: string
    setValue: Function
    title: string
}
export const InputComent = ({ value, setValue, title }: Props) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    return (
        <div style={{ width: `70%`, position: 'relative' }}>
            <input type="text" name="" id="" value={value} onChange={changeHandler} placeholder={`${title}`} />
            <img src="/svg/send.svg" alt="" style={{ position: 'absolute', top: '1.6vh', right: '-12vh', cursor: "pointer" }} />
        </div>
    );
}

type Props_ = {
    islike: boolean
    value: boolean
    fn: Function
    count: number
}
export const LikeComent = ({ islike, value, fn, count }: Props_) => {
    return (
        <div className="likecoment" style={!value ? { transition: '.2s' } : { outline: `2px solid ${colors.maincolor}`, transition: '.4s' }} onClick={() => fn()}>
            {
                islike ? <>{!value ? <img src="/svg/like.svg" /> : <img src="/svg/like_.svg" />}</> : <>{!value ? <img src="/svg/coment.svg" /> : <img src="/svg/coment_.svg" />}</>
            }
            <p style={!value ? { transition: '.4s' } : { color: colors.maincolor, transition: '.4s' }}> {count} </p>
        </div>
    );
}