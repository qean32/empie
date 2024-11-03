import { useRef } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { MeetingChild } from "../../childrens/other/meeting";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useParams } from "react-router";
import { MEETINGServices } from "../../services/MEETINGServices";
import usePage from "../../customHooks/usePage";


export const Meetings = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('матчи')

    const params = useParams()
    const scrollRef: any = useRef()
    const meetings: any = useDinamickPagination(() => MEETINGServices.GETMeeting(meetings.offset), scrollRef, ['meetings'])

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

                        {meetings && meetings.finaldata.map((item: any) => (
                            <SmallCenterPlate key={item.id}><MeetingChild item={item} /></SmallCenterPlate>
                        ))}

                        <div ref={scrollRef} className="scrollhandlerref"></div>
                    </Center>
                    <DftRPanel direction={Number(params.iddirection)} />
                </>
            </div>
        </>
    );
}