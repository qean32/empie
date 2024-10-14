import { useContext, useRef } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { TournamentChild } from "../../childrens/other/tournament";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useParams } from "react-router";
import { TOURNAMENTServices } from "../../services/TOURNAMENTServices";


export const Tournaments = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const params = useParams()
    const scrollRef: any = useRef()
    const tournaments: any = useDinamickPagination(() => TOURNAMENTServices.GETTouramentShort(tournaments.offset, '', params.id), scrollRef, ['tournaments'])

    ChangeTitle('турниры')
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

                        {tournaments && tournaments.finaldata.map((item: any) => (
                            <SmallCenterPlate key={item.id}><TournamentChild item={item} /></SmallCenterPlate>
                        ))}

                        <div ref={scrollRef} className="scrollhandlerref"></div>

                    </Center>
                    <DftRPanel direction={Number(params.iddirection)} />
                </>
            </div>
        </>
    );
}