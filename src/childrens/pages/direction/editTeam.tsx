import { memo, useEffect, useState } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile } from "../../../components/ui/meny-time use/customInput";
import { useMutation } from "react-query";
import { TEAMServices } from "../../../services/TEAMServices";
import { useParams } from "react-router";
import useRequest from "../../../customHooks/useRequest";
import { InlineUser } from "../../../components/ui/meny-time use/inlinePrezentation";
import { PLAYERServices } from "../../../services/PLAYERServices";


export const EditTeamChild = ({ }: {}) => {
    const team = useRequest(() => TEAMServices.GETTeam(0, params.id), ['team'])

    useEffect(() => {
        if (team.finaldata[0]) {
            setName(team.finaldata[0].name)
            setStatus(team.finaldata[0].status)
        }
    }, [team.finaldata[0]])

    const params: any = useParams()
    const establishFile = useMutation(() => TEAMServices.UPDATETeam(returnformData(), params?.id, true))
    const edit = useMutation(() => TEAMServices.UPDATETeam({ name, status }, params?.id))

    const editHandler = () => {
        const fn = () => {
            edit.mutate()
            establishFile.mutate()
        }
        (name.length > 1 && name.length < 15 && status.length > 1 && status.length < 43) ?
            fn()
            :
            alert("невалидные данные")
    }

    const returnformData = () => {
        const data = new FormData
        logo && data.append('logo', logo)
        background && data.append('background', background)

        return data
    }


    const [name, setName] = useState<string>('')
    const [status, setStatus] = useState<string>('')

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
                            <InputText title={"статус"} value={status} setValue={setStatus} max={42} validate={false} />
                        </div>

                        <span>
                            <InputFile setValue={setLogo} title="изображение команды" />
                            <InputFile setValue={setBackground} title="фон команды" />
                        </span>

                        <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                            <Button title="сохранить" function_={editHandler} />
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
            <Players teamDirection={team?.finaldata[0]?.direction} teamid={team?.finaldata[0]?.id} />
        </>
    );
}


const Player = ({ item, teamid, teamDirection }: { item: any, teamid: number, teamDirection: number }) => {

    const DeleteHandler = () => {
        PLAYERServices.UPDATEPlayer(teamDirection == 1 ? { teamCS: null } : { teamDOTA: null }, item.id)
    }
    const CrownHandler = () => {
        TEAMServices.UPDATETeam({ director: item.id }, teamid)
    }

    return (
        <div style={{ position: 'relative' }}>
            <InlineUser item={item} />
            <div style={{ position: 'absolute', right: '-90px', top: '20px', display: 'flex', gap: '20px' }}>
                <img src="/svg/crown.svg" alt="" title="передать корону" style={{ cursor: 'pointer' }} onClick={CrownHandler} />
                <img src="/svg/delete.svg" alt="" title="исключить" style={{ cursor: 'pointer' }} onClick={DeleteHandler} />
            </div>
        </div>
    );
}


const Players = memo(({ teamDirection, teamid }: { teamDirection: number, teamid: number }) => {
    const players = useRequest(() => PLAYERServices.GETPlayer(0,
        teamDirection == 1 ? '' : teamid,
        teamDirection == 2 ? '' : teamid
    ), ['playersteam'])

    return (
        <SmallCenterPlate>
            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '40px 0', alignItems: 'normal' }}>
                <div>
                    {players && players?.finaldata[0]?.map((item: any) => (
                        <Player item={item} teamid={teamid} teamDirection={teamDirection} />
                    ))}
                </div>
            </div>
        </SmallCenterPlate>
    );
})