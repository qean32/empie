import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { EditProfileChild } from "../../childrens/pages/main/editProfile";
import usePage from "../../customHooks/usePage";


export const EditProfile = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('редактор профиля')

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel function_={modal.SwapFn} />
                <Center><EditProfileChild /></Center>
                <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
            </div>
        </>
    );
}