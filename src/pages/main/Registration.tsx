import { useContext, useEffect, useState } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { Header } from "../../components/ui/meny-time use/header";
import ChangeTitle from "../../functions/ChangeTitle";
import { Button } from "../../components/ui/meny-time use/customButton";
import useBoolean from "../../customHooks/useBoolean";
import { InputEmail, InputPassword, InputText } from "../../components/ui/meny-time use/customInput";

type Props = {

}
export const Registration = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    ChangeTitle('вход')
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repassword, setRePassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const reg = useBoolean(true)
    const reg_ = useBoolean(true)
    const on = useBoolean(true)

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


    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <div style={{ ...positioncenterbyabsolute, top: '50%' }}>
                            <CenterPlate>
                                <div className="dftcontainer regwindow transition07" style={reg.boolean ? { maxHeight: '500px' } : { maxHeight: '320px' }}>
                                    <div style={{ zIndex: '12', backgroundColor: '#292929' }} className=""></div>
                                    <div className="regentrance" style={{ width: '200%' }}>
                                        <div className="navreg">
                                            <p onClick={on.on}>вход <img src="/svg/door.svg" alt="" /></p>
                                            <p onClick={on.off}>регистрация <img src="/svg/reg_user.svg" alt="" /></p>
                                        </div>
                                        <div style={reg_.boolean ? { marginLeft: '-50%' } : {}} className="transition07">
                                            <div>
                                                <div><InputEmail value={email} setValue={setEmail} title="почта" /></div>
                                                <div><InputPassword value={password} setValue={setPassword} title="пароль" /></div>
                                                <div className="regwarning">
                                                    <p> забыли пароль? --анлак</p>
                                                    <p onClick={on.off}> нет аккаунта? --регистрация</p>
                                                </div>
                                                <div><Button title="вход" function_={() => undefined} /></div>
                                            </div>
                                            <div>
                                                <div><InputText value={firstname} setValue={setFirstname} title="имя" max={20} /></div>
                                                <div><InputText value={lastname} setValue={setLastname} title="фамилия" max={20} /></div>
                                                <div><InputEmail value={email} setValue={setEmail} title="почта" /></div>
                                                <div><InputPassword value={password} setValue={setPassword} title="пароль" /></div>
                                                <div className="regwarning">
                                                    <p onClick={on.on}> есть аккаунт? --войти</p>
                                                </div>
                                                <div><Button title="регистрация" function_={() => undefined} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CenterPlate>
                        </div>
                    </>
                }
            </div >
        </>
    );
}