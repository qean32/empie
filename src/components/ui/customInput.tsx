import { useEffect, useRef, useState } from "react"
import useBoolean from "../../customHooks/useBoolean"
import ValidateRuName from "../../functions/ValidateRuName"
import moment from "moment"
import ValidatePassword from "../../functions/ValidatePassword"
import ValidateEmail from "../../functions/ValidateEmail"

type PropsText = {
    width?: number
    title: string
    value: string
    setValue: Function
    max: number
}
export const InputText = ({ width, title, value, setValue, max }: PropsText) => {
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
            <div style={{ transform: 'translateY(1vh)' }}>
                <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>не используйте латиницу / числа</p>
            </div>
            <div style={{ transform: 'translate(22vh, -1vh)' }}>
                <p className="inputwarning" style={value.length > max ? { opacity: '1' } : { color: 'whitesmoke', opacity: '.6' }}> {value.length}/{max} </p>
            </div>
        </div>
    );
}

type PropsPassword = {
    width?: number
    title: string
    value: string
    setValue: Function
}
export const InputPassword = ({ width, title, value, setValue }: PropsPassword) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)
    const view = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (value != '') check()
    }, [value])

    const check = () => {
        if (value != '') { color.on() } else { color.off() }
        if (!ValidatePassword(value)) { valide.on() } else { valide.off() }
    }

    const id_ = Math.round(Math.random() * 1000)
    return (
        <div style={{ position: 'relative', width: '30vh' }}>
            <img src={view.boolean ? "/svg/unlock.svg" : "/svg/lock.svg"} alt="" onClick={() => view.SwapFn()} className="lockpass" />
            <label htmlFor={`${id_}`} className="fill" style={width ? { width: `${width + 10}vh` } : {}}>
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -2.4vh)' } : {}}>{title}</p>
            </label>
            <input type={view.boolean ? 'text' : 'password'} name="" id={`${id_}`} style={width ? { width: `${width}vh` } : {}}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputwarning" style={!valide.boolean ? { opacity: '0', bottom: '-2.6vh' } : { bottom: '-2.6vh' }}> используйте латиницу и цифры. минимальная длина - 6</p>
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

    const id_ = Math.round(Math.random() * 1000)
    return (
        <>
            <div style={{ display: 'flex', height: '4.5vh', position: 'relative', flexDirection: 'column' }}>
                <label htmlFor={`${id_}`} onClick={color.SwapFn}>{value ? `${value}` : 'назначить время'} <img src="/svg/clock.svg" alt="" style={{ margin: '1.6vh' }} /></label>
                <p onClick={() => input.SwapFn()} className="inputwarning" style={{ margin: '0 0 0 2vh' }}>точная настройка</p>
                <div>
                    <input type="time" name="" id={`${id_}`} value={value} onChange={changeHandler} style={input.boolean ? {} : { display: 'none' }} className="timeinput" />
                </div>
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
            <p className="inputwarning" style={{ color: 'whitesmoke' }}>{notification}</p>
        </div>
    );
}


type PropsNumber = {
    width?: number
    title: string
    value: number
    setValue: Function
    max: number
    min: number
}
export const InputNumber = ({ width = 10, title, value, setValue, min, max }: PropsNumber) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (value != null) check()
    }, [value])

    const check = () => {
        if (value > max) { valide.on(); setValue(max) }
        else if (value < max) { valide.on(); setValue(min) }
    }

    const id_ = Math.round(Math.random() * 1000)
    return (
        <div style={{ position: 'relative' }}>
            <label htmlFor={`${id_}`} className="fill" style={width ? { width: `${width + 10}vh` } : {}}>
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -2.4vh)' } : {}}>{title}</p>
            </label>
            <input type="number" name="" id={`${id_}`} style={width ? { width: `${width}vh` } : {}}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>минимальное значение - {min} максимальное - {max}</p>
        </div>
    );
}

type PropsCheckbox = {
    value: boolean
    setValue: Function
    title: string
}
export const Checkbox = ({ title, setValue, value }: PropsCheckbox) => {
    const changeHandler = () => {
        setValue((prev: boolean) => !prev)
    }
    return (
        <div onClick={changeHandler} style={{ cursor: 'pointer' }}>
            <p style={{ position: 'relative' }}>{title} <input type="checkbox" style={value ? { opacity: '0' } : { opacity: '1' }} className="transition03 checkbox_" />
                <img src="/svg/accept.svg" alt="" style={value ? { opacity: '1' } : { opacity: '0' }} className="transition03 checkbox_" /></p>
        </div>
    );
}

type PropsEmail = {
    width?: number
    title: string
    value: string
    setValue: Function
}
export const InputEmail = ({ width, title, value, setValue }: PropsEmail) => {
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
        if (!ValidateEmail(value)) { valide.on() } else { valide.off() }
    }

    const id_ = Math.round(Math.random() * 1000)
    return (
        <div style={{ position: 'relative' }}>
            <label htmlFor={`${id_}`} className="fill" style={width ? { width: `${width + 10}vh` } : {}}>
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -2.4vh)' } : {}}>{title}</p>
            </label>
            <input type="text" name="" id={`${id_}`} style={width ? { width: `${width}vh` } : {}}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>не валидная почта</p>
            <div style={{ transform: 'translate(22vh, -1vh)' }}>
                <p className="inputwarning" style={value.length > 40 ? { opacity: '1' } : { color: 'whitesmoke', opacity: '.6' }}> {value.length}/40 </p>
            </div>
        </div>
    );
}