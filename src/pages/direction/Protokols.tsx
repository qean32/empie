import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { ProtokolsChild } from "../../childrens/pages/direction/protokols";
import { useParams } from "react-router";


export const Protokols = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('протоколы')
    const direction = useParams()

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
                    <Center><ProtokolsChild /></Center>
                    <DftRPanel direction={Number(direction.iddirection)} />
                </>
            </div>
        </>
    );
}