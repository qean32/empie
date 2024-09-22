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
    const reg = useBoolean(false)
    const reg_ = useBoolean(false)
    const on = useBoolean(false)

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
                            <Button title="click" function_={on.SwapFn} />
                            <CenterPlate>
                                <div className="dftcontainer regwindow transition03" style={reg.boolean ? { height: '500px' } : { height: '320px' }}>
                                    <div style={{ zIndex: '2' }} className=""></div>
                                    <div className="regentrance" style={{ width: '200%' }}>
                                        <div style={reg_.boolean ? { marginLeft: '-50%' } : {}} className="transition03">
                                            <div>
                                                <div><p>ВХОД</p></div>
                                                <div><InputEmail value={email} setValue={setEmail} title="почта" /></div>
                                                <div><InputPassword value={password} setValue={setPassword} title="пароль" /></div>
                                                <div><Button title="вход" function_={() => undefined} /></div>
                                            </div>
                                            <div>
                                                <div><p>РЕГИСТРАЦИЯ</p></div>
                                                <div><InputText value={firstname} setValue={setFirstname} title="имя" max={20} /></div>
                                                <div><InputText value={lastname} setValue={setLastname} title="фамилия" max={20} /></div>
                                                <div><InputEmail value={email} setValue={setEmail} title="почта" /></div>
                                                <div><InputPassword value={password} setValue={setPassword} title="пароль" /></div>
                                                <div><InputPassword value={repassword} setValue={setRePassword} title="повторите пароль" /></div>
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