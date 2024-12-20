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
import { PLAYERServices } from "../../../services/PLAYERServices";
import useUserInfo from "../../../customHooks/useUserInfo";
import useBoolean from "../../../customHooks/useBoolean";
import { createPortal } from "react-dom";
import { Modal } from "../../../components/hoc/modal";
import UserWasHereModal from "../../../components/ui/one-time use/userwashere";


export const RegTeamChild = ({ }: {}) => {
    const { user }: any = useContext(SomeContext)
    const [idnewteam, setIdnewTeam] = useState<number>()
    const params: any = useParams()
    const navigate = useNavigate()
    const getteam = useRequest(() => TEAMServices.GETTeam(0, '', user?.user_id), ['getteamdirector'])
    const modalregistration = useBoolean(false)
    const registration = useMutation(() => (TEAMServices.CREATETeam({ name, status, director: user.user_id, direction: params.iddirection }))
        .then((results: any) => { setIdnewTeam(results?.id) }))

    const regHandler = () => {
        const { userinfo }: any = useUserInfo()

        if (userinfo)
            (name.length > 1 && name.length < 15 && status.length > 1 && status.length < 43) ?
                registration.mutate()
                :
                alert("невалидные данные")
        else
            modalregistration.on()
    }
    const establishFile = useMutation(() => TEAMServices.UPDATETeam(returnformData(),
        idnewteam, true).then(() => navigate(`/team/${idnewteam}`)))
    const regtransfer: any = useMutation(['regtransfer'],
        () => TRANSFERServices.CREATETransfer({ script: 4, user: user?.user_id, team: idnewteam }))
    const acceptance: any = useMutation(['updateplayer'], () => PLAYERServices.UPDATEPlayer(
        params.iddirection == 2 ?
            { team_dota: idnewteam }
            :
            { team_cs: idnewteam }
        , user?.user_id)
    )

    useEffect(() => {

        const fn = () => {
            regtransfer.mutate()
            acceptance.mutate()
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
                {modalregistration.boolean && createPortal(
                    <Modal function_={modalregistration.SwapFn}><UserWasHereModal modalregistration={modalregistration} /></Modal>,
                    document.body
                )}
                <div className="dftcontainer" style={{ minHeight: '500px', justifyContent: 'start', padding: '40px 0' }}>
                    <form className="edit">
                        {params.iddirection == 2 ?
                            <p>регистрация команды DOTA</p>
                            :
                            <p>регистрация команды CS</p>
                        }
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
                            {getteam.finaldata[0] ?
                                <p style={{ transform: 'translateX(-40px)' }}>
                                    вы уже являетесь капитаном команды
                                </p>
                                :
                                <Button title="сохранить" function_={regHandler} />}
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
        </>
    );
}