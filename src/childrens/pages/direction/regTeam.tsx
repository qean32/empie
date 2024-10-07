import { SmallCenterPlate } from "../../../components/hoc/plates/centerPlate";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { InputText, InputFile } from "../../../components/ui/meny-time use/customInput";


type Props = {

}
export const RegTeamChild = ({ }: Props) => {

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
        </>
    );
}