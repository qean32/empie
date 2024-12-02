import { RightPanel } from "../../../components/hoc/rightPanel";
import { AdminPlate } from "../../../components/hoc/plates/adminPlate";
import { InputText } from "../../../components/ui/meny-time use/customInput";
import { useContext, useState } from "react";
import { Button } from "../../../components/ui/meny-time use/customButton";
import { useMutation } from "react-query";
import { CASHServices } from "../../../services/CASHServices";
import { SomeContext } from "../../../context";
import useRequest from "../../../customHooks/useRequest";

const CashRight = () => {
    const [price, setPrice] = useState('')
    const [direction, setDirection] = useState('')
    const [content, setContent] = useState('')
    const { user }: any = useContext(SomeContext)
    const cash = useRequest(() => CASHServices.GETBudget(), ['budget'])
    const craeteCash = useMutation(() => CASHServices.CREATECash({ price, direction, author: user.user_id, content })
        .then(() => updateBudget.mutate()))
    const updateBudget = useMutation(() => CASHServices.UPDATEBudget({ budget: Number(cash.finaldata[0]?.budget) + Number(price) })
        .then(() => location.reload()))

    const SubHandler = () => {
        craeteCash.mutate()
    }

    return (
        <>
            {user?.is_org ?
                <>
                    <form action="" onSubmit={SubHandler}>
                        <InputText title={"куда"} value={direction} setValue={setDirection} max={0} />
                        <InputText title={"сколько"} value={price} setValue={setPrice} max={0} />
                        <InputText title={"на что"} value={content} setValue={setContent} max={0} />
                        <Button title={'отправить'} function_={SubHandler} />
                    </form>
                </>
                :
                <>
                    <div className="dftcontainer"></div>
                </>
            }
        </>
    );
}

export default CashRight;