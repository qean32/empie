import React from "react"

type Props = {
    value: string
    setValue: Function
    width?: number
    title: string
}
export const InputComent = ({ value, setValue, title, width = 40 }: Props) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }



    return (
        <div style={{ width: `${width}vh`, position: 'relative' }}>
            <input type="text" name="" id="" value={value} onChange={changeHandler} placeholder={`${title}`} style={{ width: `${width}vh` }} />
            <img src="/svg/send.svg" alt="" style={{ position: 'absolute', top: '1.6vh', right: '-9vh', cursor: "pointer" }} />
        </div>
    );
}