import { memo, useContext, useEffect, useRef } from "react";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightTransferChild } from "../../childrens/other/rightTransfer";
import { TopTeamChild } from "../../childrens/other/topTeam";
import { StreamChild } from "../../childrens/other/stream";
import ChangeTitle from "../../functions/ChangeTitle";
import { Post } from "../../components/ui/meny-time use/post";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { TournamentChild } from "../../childrens/other/tournament";
import { MoveonGridChild } from "../../childrens/other/moveongrid";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useParams } from "react-router";
import { POSTServices } from "../../services/POSTServices";
import useRequest from "../../customHooks/useRequest";
import { TOURNAMENTServices } from "../../services/TOURNAMENTServices";
import Cezar from "../../components/ui/meny-time use/cezar";
import usePage from "../../customHooks/usePage";
import UserWasHereModal from "../../components/ui/one-time use/userwashere";
import { userwashereStorage } from "../../exports";
import { createPortal } from "react-dom";
import { Modal } from "../../components/hoc/modal";
import useBoolean from "../../customHooks/useBoolean";


export const News = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('новости')

    const modalregistration = useBoolean(false)
    const userwashere_ = JSON.parse(localStorage.getItem(userwashereStorage) as any) || { userwashere: false }

    const params = useParams()
    const scrollRef: any = useRef()
    const firstpost = useRequest(() => POSTServices.GETPost(0, params.iddirection, 1), ['firstpost'])
    const tournament = useRequest(() => TOURNAMENTServices.GETTouramentShort(0), ['firsttournament'])
    const posts: any = useDinamickPagination(() => POSTServices.GETPost(posts.offset, params.iddirection), scrollRef, ['post'], 4, 1)

    useEffect(() => {
        setTimeout(() => !userwashere_.userwashere && modalregistration.on(), 3000)
    }, [])


    if (!params.iddirection) {
        return (
            <>
                {modalregistration.boolean && createPortal(
                    <Modal function_={modalregistration.SwapFn}><UserWasHereModal modalregistration={modalregistration} /></Modal>,
                    document.body
                )}
                <Header />
                <div className="main">
                    {loading &&
                        <MainLoader />
                    }
                    <>
                        <LeftPanel />
                        <Center>

                            <Cezar />

                            {firstpost && firstpost.finaldata.map((item: any) => (
                                <DftPost key={item.id} item={item} />
                            ))}

                            <SmallCenterPlate><TournamentChild item={tournament.finaldata[0]} /></SmallCenterPlate>

                            {posts && posts.finaldata.map((item: any) => (
                                <DftPost key={item.id} item={item} />
                            ))}

                            <div ref={scrollRef} className="scrollhandlerref"></div>

                        </Center>

                        <Right>
                            <RightPanel><RightPanelChildren /></RightPanel>
                            <RightPanel><MoveonGridChild /></RightPanel>
                            <RightPanel><RightTransferChild /></RightPanel>
                            <RightPanel><TopTeamChild /></RightPanel>
                            <RightPanel><StreamChild /></RightPanel>
                        </Right>
                    </>
                </div>
            </>
        );
    }

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

                        <Cezar />

                        <DftPost item={undefined} />

                        <SmallCenterPlate><TournamentChild item={undefined} /></SmallCenterPlate>

                        {posts && posts.finaldata.map((item: any, index: number) => (
                            <DftPost key={index} item={item} />
                        ))}

                        <div ref={posts.scrollRef} className="scrollhandlerref"></div>
                    </Center>

                    <Right>
                        <RightPanel><RightPanelDirectionChildren direction={Number(params.iddirection)} /></RightPanel>
                        <RightPanel><MoveonGridChild /></RightPanel>
                        <RightPanel><RightTransferChild /></RightPanel>
                        <RightPanel><TopTeamChild /></RightPanel>
                        <RightPanel><StreamChild /></RightPanel>
                    </Right>
                </>
            </div>
        </>
    )
}


export const DftPost = memo(({ item }: { item: any }) => {
    return (
        <SmallCenterPlate key={item.id}>
            <Post item={item} />
        </SmallCenterPlate>
    );
})
