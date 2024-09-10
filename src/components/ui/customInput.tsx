import { useEffect, useState } from "react"
import useBoolean from "../../customHooks/useBoolean"
import ValidateRuName from "../../functions/ValidateRuName"
import moment from "moment"

type PropsText = {
    width?: number
    title: string
    value: string
    setValue: Function
}
export const InputText = ({ width, title, value, setValue }: PropsText) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (value != '') check()
    }, [value])

    const check = () => {
        if (value != '') { color.on() } else { color.off() }
        if (!ValidateRuName(value)) { valide.on() } else { valide.off() }
    }

    const id_ = Math.round(Math.random() * 1000)
    return (
        <div style={{ position: 'relative' }}>
            <label htmlFor={`${id_}`} className="fill" style={width ? { width: `${width + 10}vh` } : {}}>
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -2.4vh)' } : {}}>{title}</p>
            </label>
            <input type="text" name="" id={`${id_}`} style={width ? { width: `${width}vh` } : {}}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputvarning" style={!valide.boolean ? { opacity: '0' } : {}}>не используйте латиницу / числа</p>
        </div>
    );
}

type PropsPassword = {

}
export const InputPassword = ({ }: PropsPassword) => {
    return (
        <div style={{ position: 'relative' }}>
            <input type="password" name="" id="" />
        </div>
    );
}

type PropsTime = {
    value: any
    setValue: Function
}
export const InputTime = ({ value, setValue }: PropsTime) => {
    const [notification, setNotification] = useState<string>('')

    useEffect(() => {
        console.log(value.getDay())
        console.log(value)
    }, [value])
    return (
        <div>
            <input type="time" name="" id="" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    );
}

type PropsDate = {
    value: string
    setValue: Function
}
export const InputDate = ({ value, setValue }: PropsDate) => {
    const [notification, setNotification] = useState<string>('')

    useEffect(() => {
        // console.log(value.getHour())
        const zxc = moment(value, "YYYY-MM-DD")
        console.log(
            zxc,
        moment(new Date, "YYYY-MM-DD")
        )
    }, [value])
    return (
        <div>
            <input type="date" name="" id="" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    );
}


type PropsNumber = {

}
export const InputNumber = ({ }: PropsNumber) => {
    return (
        <div>
            <input type="number" name="" id="" />
        </div>
    );
}

type PropsCheckbox = {

}
export const Checkbox = ({ }: PropsCheckbox) => {
    return (
        <div>
            <input type="checkbox" name="" id="" />
        </div>
    );
}