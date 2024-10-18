import React, { useEffect, useRef, useState } from "react"
import { colors } from "../../../functions/GiveConst"


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


export const ShellLikeComent = ({ islike, value, fn, count }: {
    islike: boolean
    value: boolean
    fn: Function
    count: number
}) => {
    return (
        <div className="likecoment" style={!value ? { transition: '.2s' } : { outline: `2px solid ${colors.maincolor}`, transition: '.4s' }} onClick={() => fn()}>
            {
                islike ? <>{!value ? <img src="/svg/like.svg" /> : <img src="/svg/like_.svg" />}</> : <>{!value ? <img src="/svg/coment.svg" /> : <img src="/svg/coment_.svg" />}</>
            }
            <p style={!value ? { transition: '.4s' } : { color: colors.maincolor, transition: '.4s' }}> {count} </p>
        </div>
    );
}


const HOCLike =
    ({ islike, value, fn, count }:
        {
            islike: boolean
            value: boolean
            fn: Function
            count: number
        }
    ) => {
        const [countclick, setCountclick] = useState<number>(0)
        const controller: any = useRef(new AbortController())
        const signal = useRef(controller?.signal)

        // const controller = new AbortController();
        // const signal = controller.signal;

        useEffect(() => {
            countclick == 1 && setCountclick(0)
            const timeout = setTimeout(() => {
                setCountclick(0)
            }, 3600)

            return () => {
                clearTimeout(timeout)
            }
        }, [countclick])

        function doSomethingAsync({ signal }: any) {
            console.log(signal)
            if (signal?.aborted) {
                return Promise.reject(new DOMException('Aborted', 'AbortError'));
            }

            return new Promise((resolve, reject) => {
                console.log('Promise Started');

                // Something fake async
                const timeout = window.setTimeout(resolve, 2500, 'Promise Resolved')

                // Listen for abort event on signal
                signal.addEventListener('abort', () => {
                    window.clearTimeout(timeout);
                    reject(new DOMException('Aborted', 'AbortError'));
                });
            });
        }

        const fn_ = () => {
            setCountclick((prev: number) => prev + 1)
            fn();

            doSomethingAsync({ signal })
                .then(result => {
                    console.log(result);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Promise Aborted');
                    } else {
                        console.log(err)
                        console.log('Promise Rejected');
                    }
                });

            if (countclick == 1) {
                console.log(controller)
                controller?.abort();
                console.log('abort fn')
            }
        }

        return (
            <ShellLikeComent islike={islike} value={value} fn={fn_} count={count} />
        );
    }

export default HOCLike;