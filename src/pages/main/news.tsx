import { memo, useContext, useEffect, useRef } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightTransferChild } from "../../childrens/other/rightTransfer";
import { TopTeamChild } from "../../childrens/other/topTeam";
import { StreamChild } from "../../childrens/other/stream";
import useBoolean from "../../customHooks/useBoolean";
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
import { SomeContext } from "../../context";
import { userwashereStorage } from "../../exports";


export const News = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    const { modalregistration }: any = useContext(SomeContext)
    const userwashere_ = JSON.parse(localStorage.getItem(userwashereStorage) as any) || { userwashere: false }

    const params = useParams()
    const scrollRef: any = useRef()
    const firstpost = useRequest(() => POSTServices.GETPost(0, params.iddirection, 1), ['firstpost'])
    const tournament = useRequest(() => TOURNAMENTServices.GETTouramentShort(0), ['firsttournament'])
    const post: any = useDinamickPagination(() => POSTServices.GETPost(post.offset, params.iddirection), scrollRef, ['post'], 4, 1)

    const modalteams = useBoolean(false)
    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)

    useEffect(() => {
        setTimeout(() => !userwashere_.userwashere && modalregistration.on(), 3000)
    }, [])


    ChangeTitle('новости')
    if (!params.iddirection) {
        return (
            <>
                {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
                {modalregistration.boolean && <Modal function_={modalregistration.SwapFn}><UserWasHereModal modalregistration={modalregistration} /></Modal>}
                {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
                {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
                {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
                <Header />
                <div className="main">
                    {loading &&
                        <MainLoader />
                    }
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <Center>

                            <Cezar />

                            {firstpost && firstpost.finaldata.map((item: any) => (
                                <DftPost key={item.id} item={item} />
                            ))}

                            <SmallCenterPlate><TournamentChild item={tournament.finaldata[0]} /></SmallCenterPlate>

                            {post && post.finaldata.map((item: any) => (
                                <DftPost key={item.id} item={item} />
                            ))}

                            <div ref={scrollRef} className="scrollhandlerref"></div>

                        </Center>

                        <Right>
                            <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
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
            {modalregistration.boolean && <Modal function_={modalregistration.SwapFn}><UserWasHereModal modalregistration={modalregistration} /></Modal>}
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel function_={modal.SwapFn} />

                    <Center>

                        <Cezar />

                        <DftPost item={undefined} />

                        <SmallCenterPlate><TournamentChild item={undefined} /></SmallCenterPlate>

                        {post && post.finaldata.map((item: any, index: number) => (
                            <DftPost key={index} item={item} />
                        ))}

                        <div ref={post.scrollRef} className="scrollhandlerref"></div>
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
