import { useContext, useEffect, useState } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile, InputText_, InputNumber } from "../../../components/ui/meny-time use/customInput";
import useRequest from "../../../customHooks/useRequest";
import { USERServices } from "../../../services/USERServices";
import { SomeContext } from "../../../context";
import { useMutation } from "react-query";



export const EditProfileChild = ({ }: {}) => {
    const [steam, setSteam] = useState<string>('')
    const [telegram, setTelegram] = useState<string>('')
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [detail, setDetail] = useState<string>('')

    const returnformData = () => {
        const data = new FormData
        logo && data.append('logo', logo)
        background && data.append('background', background)

        return data
    }

    const [logo, setLogo] = useState<any>()
    const [background, setBackground] = useState<any>()
    const { user }: any = useContext(SomeContext)
    const user_ = useRequest(() => USERServices.GETUser(0, user.user_id), 'user')

    const establishFile = useMutation(() => USERServices.UPDATEUser(returnformData(), user.user_id, true))
    const edit = useMutation(() => USERServices.UPDATEUser({ steam, telegram, }, user.user_id))

    const editHandler = () => {
        const fn = () => {
            edit.mutate()
            establishFile.mutate()
        }
        (true) ?
            fn()
            :
            alert("невалидные данные")
    }

    useEffect(() => {
        const fn = () => {
            setFirstname(user_.finaldata[0].first_name)
            setLastname(user_.finaldata[0].last_name)
            setSteam(user_.finaldata[0].steam)
            setTelegram(user_.finaldata[0].telegram)
            setDetail(user_.finaldata[0].status)
        }

        user_.finaldata[0] && fn()
    }, [user_.finaldata[0]])
    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ minHeight: '500px', justifyContent: 'start', padding: '40px 0' }}>
                    <form className="edit">
                        <div style={{ margin: '20px 0', gap: '60px', width: '80%' }} className="smallinput">
                            <InputText title={"имя"} value={firstname} setValue={setFirstname} max={14} />
                            <InputText title={"фамилия"} value={lastname} setValue={setLastname} max={16} />
                        </div>
                        <span>
                            <InputFile setValue={setBackground} title="фон профиля" />
                            <InputFile setValue={setLogo} title="изображение профиля" />
                        </span>
                        <div style={{ width: '70%' }}>
                            <InputText title={"статус"} value={detail} setValue={setDetail} max={255} />
                        </div>

                        <div style={{ margin: '20px 0', gap: '60px', width: '80%' }} className="smallinput">
                            <InputText_ title={"ссылка стим"} value={steam} setValue={setSteam} max={200} word={"steam"} />
                            <InputText_ title={"ссылка тг"} value={telegram} setValue={setTelegram} max={200} word={"t.me"} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                            <Button title="сохранить" function_={editHandler} />
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ justifyContent: 'start', padding: '40px 0' }}>
                    <form className="edit" style={{ gap: '20px' }}>
                        <p>pts dota2</p>
                        <div style={{ width: '50%' }}>
                            <InputNumber title={""} value={0} setValue={() => undefined} max={0} min={0} />
                        </div>
                        <p>elo cs2</p>
                        <div style={{ width: '50%' }}>
                            <InputNumber title={""} value={0} setValue={() => undefined} max={0} min={0} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                            <Button title="сохранить" function_={() => undefined} />
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
        </>
    );
}