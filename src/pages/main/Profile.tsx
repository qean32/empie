import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Center } from "../../components/hoc/center";
import { ProfileChild } from "../../childrens/pages/main/profile";
import usePage from "../../customHooks/usePage";
import ProfileRightChaild from "../../childrens/other/right/profileRight";


export const Profile = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('пользователь')
    
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
                    <Center><ProfileChild /></Center>
                    <Right><ProfileRightChaild /></Right>
                </>
            </div>
        </>
    );
}