import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import useBoolean from "../../customHooks/useBoolean";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { OffersChild } from "../../childrens/pages/main/offers";
import usePage from "../../customHooks/usePage";


export const Offers = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('приглашения')

    const modalmeetings = useBoolean(false)
    const modaltournaments = useBoolean(false)
    const modalteams = useBoolean(false)

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
            {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
            {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <LeftPanel function_={modal.SwapFn} />
                <Center><OffersChild /></Center>
                <Right><RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel></Right>
            </div>
        </>
    );
}