import { useEffect, useState } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile } from "../../../components/ui/meny-time use/customInput";
import { useMutation } from "react-query";
import { TEAMServices } from "../../../services/TEAMServices";
import { useParams } from "react-router";
import useRequest from "../../../customHooks/useRequest";


export const EditTeamChild = ({ }: {}) => {
    const team = useRequest(() => TEAMServices.GETTeam(0, params.id), 'team')

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
        </>
    );
}


// const Player = ({ }: {}) => {
//     return (
//         <div style={{ position: 'relative' }}>
//             <InlineUser el={undefined} />
//             <div style={{ position: 'absolute', right: '-90px', top: '20px', display: 'flex', gap: '20px' }}>
//                 <img src="/svg/crown.svg" alt="" title="передать корону" />
//                 <img src="/svg/delete.svg" alt="" title="исключить" />
//             </div>
//         </div>
//     );
// }


// const Players = memo(({ }: {}) => {
//     const [player, setPlayer] = useState<any[]>([{}, {}, {}, {}])
//     return (
//         <SmallCenterPlate>
//             <div className="dftcontainer" style={{ flexDirection: 'column', padding: '40px 0', alignItems: 'normal' }}>
//                 <div>
//                     {player.map((el, index) => (
//                         <Player key={index} />
//                     ))}
//                 </div>
//             </div>
//         </SmallCenterPlate>
//     );
// })