import { useRef } from "react";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
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
    const [{ }, loading]: any = usePage()
    ChangeTitle('матчи')

    const params = useParams()
    const scrollRef: any = useRef()
    const meetings: any = useDinamickPagination(() => MEETINGServices.GETMeeting(meetings.offset, '', 12, '', false, params.iddirection), scrollRef, ['meetings'])

    return (
        <>
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
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