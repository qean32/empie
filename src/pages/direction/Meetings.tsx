import { useContext, useRef } from "react";
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
import useDinamicPagination from "../../customHooks/useDinamicPagination";
import { useParams } from "react-router";
import { MEETINGServices } from "../../services/MEETINGServices";

type Props = {

}
export const Meetings = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const direction = useParams()

    const scrollRef: any = useRef()
    const meetings: any = useDinamicPagination(() => MEETINGServices.GETMeeting(meetings.offset), scrollRef, 'meetings')

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
                        
                        {meetings && meetings.finaldata.map((el: any) => (
                            <SmallCenterPlate><MeetingChild /></SmallCenterPlate>
                        ))}

                        <div ref={scrollRef} className="scrollhandlerref"></div>
                    </Center>
                    <DftRPanel direction={Number(direction.iddirection)} />
                </>
            </div>
        </>
    );
}