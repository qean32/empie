import { useEffect, useRef, useState } from "react"
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
    const input = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (time: string): void => {
        setValue(time)
        color.SwapFn()
    }


    return (
        <>
            <div style={{ display: 'flex', height: '4.5vh', position: 'relative' }}>
                <label htmlFor="time_list" onClick={color.SwapFn}>{value ? `${value}` : 'назначить время'} <img src="/svg/clock.svg" alt="" style={{ margin: '1.6vh' }} /></label>
                <p onClick={() => input.SwapFn()}>точная настройка</p>
                <input type="time" name="" id="time_list" value={value} onChange={changeHandler} style={input.boolean ? {} : { display: 'none' }} />
                <div className={color.boolean ? 'clocktable circkle' : 'clocktable'}>
                    <div onClick={() => clickHandler('12:40')}>12:40</div>
                    <div onClick={() => clickHandler('16:40')}>16:40</div>
                    <div onClick={() => clickHandler('18:40')}>18:40</div>
                    <div onClick={() => clickHandler('19:20')}>19:20</div>
                    <div onClick={() => clickHandler('19:40')}>19:40</div>
                    <div onClick={() => clickHandler('20:20')}>20:20</div>
                    <div onClick={() => clickHandler('20:40')}>20:40</div>
                    <div onClick={() => clickHandler('21:20')}>21:20</div>
                    <div onClick={() => clickHandler('21:40')}>21:40</div>
                    <div onClick={() => clickHandler('22:20')}>22:20</div>
                    <div onClick={() => clickHandler('22:40')}>22:40</div>
                    <div onClick={() => clickHandler('23:20')}>23:20</div>
                    <div onClick={() => clickHandler('23:40')}>23:40</div>
                    <div onClick={() => clickHandler('00:20')}>00:20</div>
                    <div onClick={() => clickHandler('00:40')}>00:40</div>
                </div >
            </div >
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