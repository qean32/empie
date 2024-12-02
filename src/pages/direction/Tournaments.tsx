import { useRef } from "react";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { TournamentChild } from "../../childrens/other/tournament";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useParams } from "react-router";
import { TOURNAMENTServices } from "../../services/TOURNAMENTServices";
import usePage from "../../customHooks/usePage";


export const Tournaments = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('турниры')

    const scrollRef: any = useRef()
    const params = useParams()
    const tournaments: any = useDinamickPagination(() => TOURNAMENTServices.GETTouramentShort(tournaments.offset, '', params.id), scrollRef, ['tournaments'])

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