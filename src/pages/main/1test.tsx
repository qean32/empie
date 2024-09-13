import { useCallback, useContext, useState } from "react";
import { Header } from "../../components/ui/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/loader";
import { CenterPlate } from "../../components/big/centerPlate";
import { LeftPanel } from "../../components/big/leftPanel";
import { RightPanel } from "../../components/big/rightPanel";
import { Modal } from "../../components/ui/modal";
import { ModalDirection } from "../../childrens/modalDirection";
import { CustomButton } from "../../components/ui/btn";
import { Search } from "../../components/ui/search";
import { InputComent } from "../../components/ui/oneUse/inputComent";

type Props = {

}
export const Test = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const [value, setValue] = useState<any>()

    const clickHandler = useCallback(() => setValue((prev: any) => !prev), [])
    return (
        <>
            {/* {value && <Modal function_={clickHandler}> <ModalDirection function_={clickHandler} /> </Modal>} */}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel />
                    <div className="center">
                        <CenterPlate>
                            {/* <CustomButton function_={clickHandler} title="click" /> */}
                        </CenterPlate>
                        <CenterPlate>
                            <InputComent value={value} setValue={setValue} title="поиск игрока" />
                        </CenterPlate>
                    </div>
                    <RightPanel />
                </div>}
        </>
    );
}