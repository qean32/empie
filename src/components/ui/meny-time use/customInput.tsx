import { useEffect, useState } from "react"
import useBoolean from "../../../customHooks/useBoolean"
import ValidateRuName from "../../../functions/ValidateRuName"
import moment from "moment"
import ValidatePassword from "../../../functions/ValidatePassword"
import ValidateEmail from "../../../functions/ValidateEmail"
import { GenerateId } from "../../../functions/GenerateNumber"
import ValidateWordToWord from "../../../functions/ValidateWordToWord"
import RenameFile from "../../../functions/RenameFile"


export const InputText = ({ title, value, setValue, max, validate = true }: {
    title: string
    value: string
    setValue: Function
    max: number
    validate?: boolean
}) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (value != '') check()
    }, [value])

    const check = () => {
        value != '' ? color.on() : color.off()

        if (validate)
            ValidateRuName(value) ? valide.off() : valide.on()
    }

    const id_ = GenerateId()
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <label htmlFor={`${id_}`} className="fill" >
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -25px)' } : { opacity: '0.8' }}>{title}</p>
            </label>
            <input type="text" name="" id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <div style={{ transform: 'translateY(0.6vh)' }}>
                <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>не используйте латиницу / числа</p>
            </div>
            <div style={{ position: 'absolute', right: '20px', bottom: '12px' }}>
                <p className="inputwarning" style={value.length > max ? { opacity: '1' } : { color: 'whitesmoke', opacity: '.6' }}> {value.length}/{max} </p>
            </div>
        </div>
    );
}


export const InputPassword = ({ title, value, setValue }: {
    title: string
    value: string
    setValue: Function
}) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)
    const view = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        value != '' && check()
    }, [value])

    const check = () => {
        value != '' ? color.on() : color.off()
        !ValidatePassword(value) ? valide.on() : valide.off()
    }

    const id_ = GenerateId()
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <img src={view.boolean ? "/svg/unlock.svg" : "/svg/lock.svg"} style={{ zIndex: '10' }} alt="" onClick={() => view.SwapFn()} className="lockpass" />
            <label htmlFor={`${id_}`} className="fill" >
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -25px)' } : { opacity: '0.8' }}>{title}</p>
            </label>
            <input type={view.boolean ? 'text' : 'password'} name="" id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputwarning" style={!valide.boolean ? { opacity: '0', bottom: '-4vh' } : { bottom: '-4vh' }}> используйте латиницу и цифры. <br /> минимальная длина - 6</p>
        </div>
    );
}


export const InputTime = ({ value, setValue }: {
    value: any
    setValue: Function
}) => {
    const color = useBoolean(false)
    const input = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (time: string): void => {
        setValue(time)
        color.SwapFn()
    }

    const id_ = GenerateId()
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


export const InputDate = ({ value, setValue }: {
    value: string
    setValue: Function
}) => {
    const [notification, setNotification] = useState<string>('')

    useEffect(() => {
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
        <div style={{ position: 'relative', width: '100%' }}>
            <input type="date" value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            <p className="inputwarning" style={{ color: 'whitesmoke' }}>{notification}</p>
        </div>
    );
}


export const InputNumber = ({ title, value, setValue, min, max }: {
    title: string
    value: number
    setValue: Function
    max: number
    min: number
}) => {
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

    const id_ = GenerateId()
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <label htmlFor={`${id_}`} className="fill" >
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -25px)' } : { opacity: '0.8' }}>{title}</p>
            </label>
            <input type="number" name="" id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>минимальное значение - {min} максимальное - {max}</p>
        </div>
    );
}


export const Checkbox = ({ title, fn, value }: {
    value: boolean
    fn: Function
    title: string
}) => {
    return (
        <div onClick={() => fn()} style={{ cursor: 'pointer' }}>
            <p style={{ position: 'relative', fontSize: '14px' }}>{title} <input type="checkbox" style={value ? { opacity: '0' } : { opacity: '1' }} className="transition03 checkbox_" />
                <img src="/svg/accept.svg" alt="" style={value ? { opacity: '1', transform: 'translate(1vh, .3vh)' } : { opacity: '0', transform: 'translate(1vh, .3vh)' }} className="transition03 checkbox_" /></p>
        </div>
    );
}


export const InputEmail = ({ title, value, setValue }: {
    title: string
    value: string
    setValue: Function
}) => {
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

    const id_ = GenerateId()
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <label htmlFor={`${id_}`} className="fill" >
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -25px)' } : { opacity: '0.8' }}>{title}</p>
            </label>
            <input type="text" name="" id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>не валидная почта</p>
            <div style={{ position: 'absolute', right: '20px', bottom: '12px' }}>
                <p className="inputwarning" style={value.length > 40 ? { opacity: '1' } : { color: 'whitesmoke', opacity: '.6' }}> {value.length}/40 </p>
            </div>
        </div>
    );
}


export const Search = ({ value, setValue, title }: {
    value: string
    setValue: Function
    title: string
}) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <input type="text" name="" id="" value={value} onChange={changeHandler} placeholder={`${title}`} />
            <img src="/svg/lupa.svg" alt="" style={{ position: 'absolute', top: '15px', right: '-22px' }} />
        </div>
    );
}


export const InputFile = ({ title = 'изображение', setValue }: {
    title?: string,
    setValue: Function
}) => {
    const id_ = GenerateId()
    const [src, setSrc] = useState<any>([]);
    const urls = src.map((file: any) => URL.createObjectURL(file));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        if (!e.target.files[0]) return

        setSrc([e.target.files[0]])
        setValue(RenameFile(e))
    }
    return (
        <div>
            <input accept="image/png, image/jpeg, image/svg, image/jpg, image/webp" type="file" id={`${id_}`} style={{ display: 'none' }} onChange={changeHandler} />
            <label htmlFor={`${id_}`} className="inputfile" style={{ pointerEvents: 'auto' }}>
                <div className="ava" style={{ backgroundImage: `url(${urls[0]})`, width: '70px', height: '50px' }}>{src.length > 0 ? <></> :
                    <img src="/svg/upload.svg" style={{ width: '27px' }} />}</div>
                <p>{title}</p>
            </label>
        </div>
    );
}


export const InputText_ = ({ title, value, setValue, max, word }: {
    title: string
    value: string
    setValue: Function
    max: number
    word: string
}) => {
    const valide = useBoolean(false)
    const color = useBoolean(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        value != '' && check()
    }, [value])

    const check = () => {
        value != '' ? color.on() : color.off()
        ValidateWordToWord(value, word) ? valide.on() : valide.off()
    }

    const id_ = GenerateId()
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <label htmlFor={`${id_}`} className="fill" >
                <p style={color.boolean ? { opacity: '0.6', transform: 'translate(-.4vh, -25px)' } : { opacity: '0.8' }}>{title}</p>
            </label>
            <input type="text" name="" id={`${id_}`}
                onFocus={() => color.on()} onBlur={check} onChange={changeHandler} value={value} />
            <div style={{ transform: 'translateY(1vh)' }}>
                <p className="inputwarning" style={!valide.boolean ? { opacity: '0' } : {}}>не валидная ссылка</p>
            </div>
            <div style={{ position: 'absolute', right: '20px', bottom: '12px' }}>
                <p className="inputwarning" style={value.length > max ? { opacity: '1' } : { color: 'whitesmoke', opacity: '.6' }}> {value.length}/{max} </p>
            </div>
        </div>
    );
}

const InpuRange = ({ min, max, step, setValue }: {
    max: number
    min: number
    step: number
    setValue: Function
}) => {
    return (
        <>
            <input type="range" name="" id="" list="tickmarks" min={min} max={max}
                step={step} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </>
    );
}

export default InpuRange;