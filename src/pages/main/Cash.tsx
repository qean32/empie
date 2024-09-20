import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/ui/meny-time use/modal";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { FullPlate } from "../../components/hoc/plates/fullPlate";
import { LeftPanel } from "../../components/hoc/leftPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { colors } from "../../functions/GiveConst";

type Props = {

}
export const Cash = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const plus = true
    ChangeTitle('расходы')
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <FullPlate>
                            <div className="cashheader greencash">
                                <div>500 ₽</div>
                                <div>история расхода</div>
                                <div>дата <img src="/svg/calendar.svg" /></div>
                                <div>дисциплина</div>
                            </div>
                            <div className="cashheader" style={{ padding: '10px 30px' }}>
                                <div style={plus ? {color: `${colors.greencolor}`} : {color: `${colors.maincolor}`}}>+5000 ₽</div>
                                <div>покупка мяча</div>
                                <div>20.05.06</div>
                                <div>dota</div>
                            </div>
                            <div className="cashheader" style={{ padding: '10px 30px' }}>
                                <div style={!plus ? {color: `${colors.greencolor}`} : {color: `${colors.maincolor}`}}>-5000 ₽</div>
                                <div>покупка мяча</div>
                                <div>20.05.06</div>
                                <div>dota</div>
                            </div>
                            <div className="cashheader" style={{ padding: '10px 30px' }}>
                                <div style={!plus ? {color: `${colors.greencolor}`} : {color: `${colors.maincolor}`}}>-5000 ₽</div>
                                <div>покупка мяча</div>
                                <div>20.05.06</div>
                                <div>dota</div>
                            </div>
                            <div className="cashheader" style={{ padding: '10px 30px' }}>
                                <div style={plus ? {color: `${colors.greencolor}`} : {color: `${colors.maincolor}`}}>+5000 ₽</div>
                                <div>покупка мяча</div>
                                <div>20.05.06</div>
                                <div>dota</div>
                            </div>
                        </FullPlate>
                        <RightPanel><></></RightPanel>
                    </>
                }
            </div>
        </>
    );
}