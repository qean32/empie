import { memo, useState } from "react";
import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile } from "../../../components/ui/meny-time use/customInput";
import { InlineUser } from "../../../components/ui/meny-time use/inlinePrezentation";


type Props__ = {

}
export const EditTeamChild = ({ }: Props__) => {
    return (
        <>
            <SmallCenterPlate>
                <div className="dftcontainer" style={{ minHeight: '500px', justifyContent: 'start', padding: '40px 0' }}>
                    <form className="edit">
                        <div style={{ width: '50%' }}>
                            <InputText title={"название"} value={""} setValue={() => undefined} max={0} />
                        </div>

                        <div style={{ width: '80%' }}>
                            <InputText title={"статус"} value={""} setValue={() => undefined} max={0} />
                        </div>

                        <span>
                            <InputFile setValue={() => undefined} title="фон команды" />
                            <InputFile setValue={() => undefined} title="изображение команды" />
                        </span>

                        <div style={{ display: 'flex', justifyContent: 'end', padding: '0 40px 0 0', margin: '20px 0 0 0' }}>
                            <Button title="сохранить" function_={() => undefined} />
                        </div>
                    </form>
                </div>
            </SmallCenterPlate>
            <Players />
        </>
    );
}

type Props_ = {

}
const Player = ({ }: Props_) => {
    return (
        <div style={{ position: 'relative' }}>
            <InlineUser />
            <div style={{ position: 'absolute', right: '-90px', top: '20px', display: 'flex', gap: '20px' }}>
                <img src="/svg/crown.svg" alt="" title="передать корону" />
                <img src="/svg/delete.svg" alt="" title="исключить" />
            </div>
        </div>
    );
}

type Props = {

}
const Players = memo(({ }: Props) => {
    const [player, setPlayer] = useState<any[]>([{}, {}, {}, {}])
    return (
        <SmallCenterPlate>
            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '40px 0', alignItems: 'normal' }}>
                <div>
                    {player.map((el, index) => (
                        <Player key={index} />
                    ))}
                </div>
            </div>
        </SmallCenterPlate>
    );
})