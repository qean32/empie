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
    const color = useBoolean(false)
    return (
        <>
            <div style={{ display: 'flex', height: '4.5vh' }}>
                <input type="time" name="" id="time_list" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                {color.boolean ? <div className="clocktable">
                    <div>12:40</div>
                    <div>18:40</div>
                    <div>20:40</div>
                    <div>21:20</div>
                    <div>22:20</div>
                    <div>23:40</div>
                </div> :
                    <></>}
            </div>
        </>
    );
}

type PropsDate = {
    value: string
    setValue: Function
}
export const InputDate = ({ value, setValue }: PropsDate) => {
    const [notification, setNotification] = useState<string>('')

    useEffect(() => {
        console.log(value)
        if (value) {
            const value_: any = moment(value).format("DD.MM").split('.')
            const now: any = moment(new Date).format("DD.MM").split('.')
            const now_ = now[1] * 30 + Number(now[0])
            const value__ = value_[1] * 30 + Number(value_[0])
            const day = now[0] - value_[0]
            const difference = now_ - value__
            if (difference == 0) { setNotification('сегодня'); return }
            if (difference > 0) { setNotification(`невалидная дата`); return }
            if (difference == -1) { setNotification('завтра'); return }
            if (difference == -2) { setNotification('послезавтра'); return }
            if (difference < -27) { setNotification('~ через месяц'); return }
            if (difference < -7) { setNotification('~ через неделю'); return }
            if (difference < 0 && [3, 4].includes(-day)) { setNotification(`через ${-day} дня`); return }
            if (difference < 0) { setNotification(`через ${-day} дней`); return }
        }
    }, [value])
    return (
        <div style={{ position: 'relative' }}>
            <input type="date" value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            <p className="inputvarning" style={{ color: 'whitesmoke' }}>{notification}</p>
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