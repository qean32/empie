import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { InputComent } from "../../components/ui/one-time use/InterfacePost";
import { colors } from "../../functions/GiveConst";

type Props = {

}
export const Chat = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle("чат")
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <Center>
                            <CenterPlate>
                                <div className="dftcontainer" style={{ padding: '20px 40px' }}>
                                    <div className="chat">
                                        <div className="chatwindow">
                                            <Message elem={{ isorg: false }} />
                                            <Message elem={{ isorg: true }} />
                                            <Message elem={{ isorg: false }} />
                                            <Message elem={{ isorg: false }} />
                                            <Message elem={{ isorg: false }} />
                                            <Message elem={{ isorg: false }} />
                                        </div>
                                        <div style={{ marginLeft: '20px' }}><InputComent value={""} setValue={() => undefined} title={"ваше сообщение.."} /></div>
                                    </div>
                                </div>
                            </CenterPlate>
                        </Center>
                        <Right>
                            <RightPanel><div className="dftcontainer"></div></RightPanel>
                        </Right>
                    </>
                }
            </div>
        </>
    );
}

type Props_ = {
    elem: any
}
export const Message = ({ elem }: Props_) => {
    return (
        <div className="message" style={elem.isorg ? { transform: 'scale(-1, 1)' } : {}}>
            <div className="ava"></div>
            <div className="messagecontext" style={elem.isorg ? { transform: 'scale(-1, 1)' } : {}}>
                <p style={{ color: `${colors.maincolor}`, transform: 'translate(0, -10px)' }}>name </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. aperiam unde saepe a explicabo?</p>
            </div>
        </div>
    );
}