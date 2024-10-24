import { useMutation } from "react-query";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile } from "../../../components/ui/meny-time use/customInput";
import { TEAMServices } from "../../../services/TEAMServices";
import { useContext, useEffect, useState } from "react";
import { SomeContext } from "../../../context";
import { useNavigate, useParams } from "react-router";
import { TRANSFERServices } from "../../../services/TRANSFERServices copy";
import useRequest from "../../../customHooks/useRequest";


export const RegTeamChild = ({ }: {}) => {
    const { user }: any = useContext(SomeContext)
    const [idnewteam, setIdnewTeam] = useState<number>()
    const params = useParams()
    const navigate = useNavigate()
    const establishFile = useMutation(() => TEAMServices.UPDATETeam(returnformData(), idnewteam, true).then(() => navigate(`/team/${idnewteam}`)))
    const registration = useMutation(() => (TEAMServices.CREATETeam({ name, status, director: user.user_id, direction: params.iddirection }))
        .then((results: any) => { setIdnewTeam(results?.id) }),
        {
            // onSuccess(data) {
            //     // establishFile.mutate()
            //     console.log(data)
            // },
        }
    )

    const getteam = useRequest(() => TEAMServices.GETTeam(0, '', user?.user_id), ['getteamdirector'])

    const regtransfer: any = useMutation(['regtransfer'], () => TRANSFERServices.CREATETransfer({ script: 4, user: user?.user_id, team: idnewteam }))

    const regHandler = () => {
        (name.length > 1 && name.length < 15 && status.length > 1 && status.length < 43) ?
            registration.mutate()
            :
            alert("невалидные данные")
    }

    useEffect(() => {
        const fn = () => {
            regtransfer.mutate()
            establishFile.mutate()
        }
        idnewteam && fn()
    }, [idnewteam])

    const returnformData = () => {
        const data = new FormData
        logo && data.append('logo', logo)
        background && data.append('background', background)

        return data
    }


    const [name, setName] = useState<string>('')
    const [status, SetStatus] = useState<string>('')

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
                            <InputText title={"статус"} value={status} setValue={SetStatus} max={42} validate={false} />
                        </div>

                        <span>
                            <InputFile setValue={setLogo} title="изображение команды" />
                            <InputFile setValue={setBackground} title="фон команды" />
                        </span>

                        <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                            {getteam.finaldata[0] ? <p>вы уже являетесь капитаном команды</p> : <Button title="сохранить" function_={regHandler} />}
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
        </>
    );
}