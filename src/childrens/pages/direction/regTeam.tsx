import { useMutation } from "react-query";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile } from "../../../components/ui/meny-time use/customInput";
import { TEAMServices } from "../../../services/TEAMServices";
import { useContext, useEffect, useState } from "react";
import { SomeContext } from "../../../context";


export const RegTeamChild = ({ }: {}) => {
    const { user }: any = useContext(SomeContext)
    const registration = useMutation(() => (TEAMServices.CREATETeam({ name, detail, director: user.user_id })).then((results: any) => console.log(results)))
    // const establishFile = useMutation(() => TEAMServices.UPDATETeam({ logo, background }, ))
    const regHandler = () => {
        if (name.length > 1 && name.length < 15 && detail.length > 1 && detail.length < 43) {
            registration.mutate()
        } else {
            alert("невалидные данные")
        }
    }

    useEffect(() => {
        if (registration.isSuccess)
            // establishFile()
            console.log(registration)
    }, [registration])

    const [name, setName] = useState<string>('')
    const [detail, setDetail] = useState<string>('')

    const [logo, setLogo] = useState<any>()
    const [background, setBackground] = useState<any>()
    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ minHeight: '500px', justifyContent: 'start', padding: '40px 0' }}>
                    <form className="edit">
                        <div style={{ width: '50%' }}>
                            <InputText title={"название"} value={name} setValue={setName} max={14} validate={false} />
                        </div>

                        <div style={{ width: '80%' }}>
                            <InputText title={"статус"} value={detail} setValue={setDetail} max={42} validate={false} />
                        </div>

                        <span>
                            <InputFile setValue={setLogo} title="изображение команды" />
                            <InputFile setValue={setBackground} title="фон команды" />
                        </span>

                        <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                            <Button title="сохранить" function_={regHandler} />
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
        </>
    );
}