import { Dispatch, useContext, useEffect, useState } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import InpuRange, { InputText, InputFile, InputText_ } from "../../../components/ui/meny-time use/customInput";
import useRequest from "../../../customHooks/useRequest";
import { USERServices } from "../../../services/USERServices";
import { SomeContext } from "../../../context";
import { useMutation } from "react-query";
import { ChangeElo, ChangePts } from "../../../functions/one-use-fucntion/GiveRank";
import { PLAYERServices } from "../../../services/PLAYERServices";



export const EditProfileChild = ({ }: {}) => {
    const [steam, setSteam] = useState<string>('')
    const [telegram, setTelegram] = useState<string>('')
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [status, setStatus] = useState<string>('')

    const returnformData = () => {
        const data = new FormData
        logo && data.append('logo', logo)
        background && data.append('background', background)

        return data
    }

    const [logo, setLogo] = useState<any>()
    const [background, setBackground] = useState<any>()
    const { user }: any = useContext(SomeContext)
    const user_ = useRequest(() => USERServices.GETUser(0, user.user_id), ['user'])

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
            user_.finaldata[0].steam && setSteam(user_.finaldata[0].steam)
            user_.finaldata[0].telegram && setTelegram(user_.finaldata[0].telegram)
            user_.finaldata[0].status && setStatus(user_.finaldata[0].status)
        }

        user_.finaldata[0] && fn()
        console.log(user_.finaldata[0])
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
                            <InputText title={"статус"} value={status} setValue={setStatus} max={255} />
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
            <PlayerData userid={user_?.finaldata[0]?.id} />
        </>
    );
}


const PlayerData = ({ userid }: { userid: number }) => {
    const getPlayer = useRequest(() => PLAYERServices.GETPlayer(0, '', '', userid), ['getplayer'])
    const updatePlayer = useMutation(['updateplayer'], () => PLAYERServices.UPDATEPlayer({}, userid))

    useEffect(() => {
        const fn = () => {
            setRankDOTA(getPlayer?.finaldata[0]?.rank_dota?.id)
            setRankCS(getPlayer?.finaldata[0]?.rank_cs?.id)
        }
        getPlayer?.finaldata[0] && fn()
    }, [getPlayer?.finaldata[0]])

    const [pts, setPts] = useState<number>(100)
    const [elo, setElo] = useState<number>(100)

    const [rankDOTA, setRankDOTA] = useState<number>(1)
    const [rankCS, setRankCS] = useState<number>(24)

    useEffect(() => {
        ChangePts(pts, setRankDOTA)
    }, [pts])

    useEffect(() => {
        ChangeElo(elo, setRankCS)
    }, [elo])

    return (
        <SmallCenterPlate>
            <div className="dftcontainer" style={{ justifyContent: 'start', padding: '40px 0' }}>
                <form className="edit" style={{ gap: '20px' }}>
                    <p>pts dota2</p>
                    <img src={`/rank/${rankDOTA}.webp`} alt="" className="rankdota" />
                    <div style={{ width: '60%' }}>
                        <InpuRange max={3320} min={100} step={140} setValue={setPts} />
                        <p style={{ width: '0px' }}>{pts}</p>
                    </div>
                    <p>elo cs2</p>
                    <img src={`/rank/${rankCS}.webp`} alt="" className="rankcs" />
                    <div style={{ width: '60%' }}>
                        <InpuRange max={1400} min={100} step={100} setValue={setElo} />
                        <p style={{ width: '0px' }}>{elo}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                        <Button title="сохранить" function_={updatePlayer.mutate} />
                    </div>
                </form>
            </div>
        </SmallCenterPlate>
    )
}