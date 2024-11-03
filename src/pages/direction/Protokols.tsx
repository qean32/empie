import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { ProtokolsChild } from "../../childrens/pages/direction/protokols";
import { useParams } from "react-router";
import usePage from "../../customHooks/usePage";


export const Protokols = ({ }: {}) => {
    const [modal, loading]: any = usePage()
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