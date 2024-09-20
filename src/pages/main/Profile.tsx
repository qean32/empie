import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import ChangeTitle from "../../functions/ChangeTitle";

type Props = {

}
export const Profile = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('пользователь')
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
                        <div>
                            <CenterPlate>
                                <div className="background"><img src="" alt="" /></div>
                                <article className="about">
                                    <p>username</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                                </article>
                            </CenterPlate>
                            <CenterPlate>
                                <div className="aboutcareer" style={{ justifyContent: 'center' }}>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                </div>
                            </CenterPlate>
                            <CenterPlate>
                                <div className="trophy">
                                    <div>
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </CenterPlate>
                        </div>
                        <RightPanel><></></RightPanel>
                    </>
                }
            </div>
        </>
    );
}