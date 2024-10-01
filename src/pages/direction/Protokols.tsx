import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";

type Props = {
}
export const Protokols = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('протоколы')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel function_={modal.SwapFn} />
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer">
                                <span style={{ padding: '0 30px' }}>
                                    <p style={{ margin: '10px 0 30px 0' }}>протоколы проведения встреч и организации турниров</p>
                                    <a href="/svg/word.svg" download={''}>
                                        <img src="/svg/word.svg" alt="" />
                                    </a>
                                </span>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <DftRPanel direction={4} />
                </>
            </div>
        </>
    );
}