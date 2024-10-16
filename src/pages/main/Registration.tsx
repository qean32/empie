import { CSSProperties, useContext, useEffect, useState } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { Header } from "../../components/ui/meny-time use/header";
import ChangeTitle from "../../functions/ChangeTitle";
import { Button } from "../../components/ui/meny-time use/customButton";
import useBoolean from "../../customHooks/useBoolean";
import { Checkbox, InputEmail, InputPassword, InputText } from "../../components/ui/meny-time use/customInput";
import { Modal } from "../../components/hoc/modal";
import Repair from "../../components/ui/meny-time use/repair";
import { Cross } from "../../components/ui/meny-time use/cross";
import { useMutation } from "react-query";
import { USERServices } from "../../services/USERServices";
import ValidateEmail from "../../functions/ValidateEmail";
import ValidatePassword from "../../functions/ValidatePassword";
import ValidateRuName from "../../functions/ValidateRuName";
import { useNavigate } from "react-router";


export const Registration = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('вход')

    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repassword, setRePassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const reg = useBoolean(true)
    const reg_ = useBoolean(true)
    const on = useBoolean(true)
    const check = useBoolean(false)

    useEffect(() => {
        if (on.boolean) {
            reg_.SwapFn()
            setTimeout(() => {
                reg.SwapFn()
            }, 500);
        } else {
            reg.SwapFn()
            setTimeout(() => {
                reg_.SwapFn()
            }, 500);
        }
    }, [on.boolean])

    const clickHandler = () => {
        on.off();
        modal.SwapFn()
    }

    const [id, setId] = useState<number>()
    const RegistrationRQ: any = useMutation(['reg'], () => USERServices.CREATEUser({ firstname, lastname, password, email }).then((results: any) => setId(results?.id)))
    const RegistrationRQPlayer: any = useMutation(['regplayer'], () => USERServices.CREATEUser({ name: `${firstname} ${lastname}`, }))
    const LoginRQ: any = useMutation(['login'], () => USERServices.ACCESSUser({ password, email }))
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            LoginRQ.mutate()
            RegistrationRQPlayer.mutate().then(() => navigate(`/profile/${id}`))
        }
    }, [id])

    const Registration = () => {
        if (repassword == password) {
            if (ValidateEmail(email) && ValidatePassword(password) && ValidateRuName(firstname) && ValidateRuName(lastname)) {
                RegistrationRQ.mutate()
            } else {
                alert("некорректные данные")
            }
        } else {
            alert("пароли не совпадают")
        }
    }

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}>
                <div className="dftcontainer" style={{ flexDirection: 'column', gap: '20px', alignItems: 'start', padding: '40px 0 40px 60px' }}>
                    <span style={{ position: 'absolute', right: '2vh', top: '1vh' }} onClick={modal.SwapFn}>
                        <Cross />
                    </span>
                    <Repair size={24} />
                    <div style={{ width: '50%' }}>
                        <InputPassword value={repassword} setValue={setRePassword} title="повторите пароль" />
                    </div>
                    <div style={{ fontSize: '17px', margin: '0 0 0 5px' }}>
                        <Checkbox value={check.boolean} title="я согласен с пользовательским соглашениям" fn={check.SwapFn} />
                    </div>
                    <Button title="регистрация" function_={Registration} />
                </div>
            </Modal >}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <div style={{ ...positioncenterbyabsolute, top: '55%' }}>
                        <CenterPlate>
                            <div className="regwindow transition07" style={reg.boolean ? { maxHeight: '510px' } : { maxHeight: '340px' }}>
                                <Carousel />
                                <div className="regentrance" style={{ width: '200%' }}>
                                    <NavPanel on={on} />
                                    <div style={reg_.boolean ? { marginLeft: '-50%' } : {}} className="transition07">
                                        <form className="windowreg">
                                            <div style={{ width: '70%' }}><InputEmail value={email} setValue={setEmail} title="почта" /></div>
                                            <div style={{ width: '70%' }}><InputPassword value={password} setValue={setPassword} title="пароль" /></div>
                                            <div className="regwarning">
                                                <p> забыли пароль? --анлак</p>
                                                <p onClick={on.off}> нет аккаунта? --регистрация</p>
                                            </div>
                                            <div>
                                                <Button title="вход"
                                                    function_={() => LoginRQ.mutate().then(() => navigate('/'))} />
                                            </div>
                                        </form>
                                        <form className="windowreg" onSubmit={clickHandler}>
                                            <div style={{ width: '70%' }}>
                                                <InputText value={firstname} setValue={setFirstname} title="имя" max={20} />
                                            </div>
                                            <div style={{ width: '70%' }}>
                                                <InputText value={lastname} setValue={setLastname} title="фамилия" max={20} />
                                            </div>
                                            <div style={{ width: '70%' }}>
                                                <InputEmail value={email} setValue={setEmail} title="почта" />
                                            </div>
                                            <div style={{ width: '70%' }}>
                                                <InputPassword value={password} setValue={setPassword} title="пароль" />
                                            </div>
                                            <div className="regwarning">
                                                <p onClick={on.on}> есть аккаунт? --войти</p>
                                            </div>
                                            <div><Button title="регистрация" function_={clickHandler} /></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </CenterPlate>
                    </div>
                </>
            </div >
        </>
    );
}


export const Carousel = ({ }: {}) => {

    const [carousel, setCarousel] = useState<number>(0)
    const [carouselStyle, setCarouselStyle] = useState<CSSProperties>({ marginTop: '-20%' })

    useEffect(() => {
        const intervalID = setInterval(() => setCarousel((prev: any) => prev + 1), 12000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    useEffect(() => {
        switch (carousel) {
            case 1: {
                setCarouselStyle({ marginTop: '-180%' })
                break;
            }
            case 2: {
                setCarouselStyle({ marginTop: '-330%' })
                break;
            }
            case 3: {
                setCarouselStyle({ marginTop: '-480%' })
                break;
            }
            default: {
                setCarouselStyle({ marginTop: '-30%' })
                setCarousel(0)
                break;
            }
        }
    }, [carousel])
    return (
        <div style={{ zIndex: '12', backgroundColor: '#292929' }} onClick={() => setCarousel((prev: any) => prev + 1)}>
            <div style={{ width: '100%' }}>
                <div style={carouselStyle} className="carousel">
                    <div><img src="/svg/cs.svg" alt="" className="carouselimg" /><p>играй в CS2 c нами</p></div>
                    <div><img src="/svg/bascketball.svg" alt="" className="carouselimg" /><p>корт зовет нас...</p></div>
                    <div><img src="/svg/dota.svg" alt="" className="carouselimg" /><p>ГОТОВ ???</p></div>
                    <div><img src="/svg/empieLogo.svg" alt="" className="carouselimg" /><p>цитата 10.10</p></div>
                </div>
            </div>
        </div>
    );
}


export const NavPanel = ({ on }: { on: any }) => {
    return (
        <div className="navreg">
            <p onClick={on.on}>вход <img src="/svg/door.svg" alt="" /></p>
            <p onClick={on.off}>регистрация <img src="/svg/reg_user.svg" alt="" /></p>
        </div>
    );
}