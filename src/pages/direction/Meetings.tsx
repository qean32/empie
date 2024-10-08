import { useContext, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { MeetingChild } from "../../childrens/other/meeting";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { arrey } from "../../functions/GiveConst";
import useDinamicPagination from "../../customHooks/useDinamicPagination";
import { useParams } from "react-router";

type Props = {

}
export const Meetings = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const [meetings, setMeetings] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}, {}])
    const direction = useParams()

    const ref = useDinamicPagination(() => setMeetings((prev: any) => [...prev, ...arrey]))

    ChangeTitle('матчи')
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
                        {meetings.map((el, index) => (
                            <SmallCenterPlate key={index}><MeetingChild /></SmallCenterPlate>
                        ))}

                        <div ref={ref} className="scrollhandlerref"></div>
                    </Center>
                    <DftRPanel direction={Number(direction.iddirection)} />
                </>
            </div>
        </>
    );
}