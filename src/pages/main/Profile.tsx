import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Center } from "../../components/hoc/center";
import { ProfileChild } from "../../childrens/pages/main/profile";
import { useParams } from "react-router";
import { USERServices } from "../../services/USERServices";


export const Profile = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const params = useParams()
    const { user }: any = useContext(SomeContext)
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
                    <Right>
                        <RightPanel>
                            <div className="rightcontainer">
                                {params.id == user?.user_id && <div className="rightpanellink" onClick={USERServices.LOGOUTUser}>выйти</div>}
                            </div>
                        </RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}