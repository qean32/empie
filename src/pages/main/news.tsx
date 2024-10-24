import { memo, useContext, useEffect, useRef } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import { SomeContext } from "../../context";
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
import { useNavigate, useParams } from "react-router";
import { POSTServices } from "../../services/POSTServices";
import useRequest from "../../customHooks/useRequest";
import { TOURNAMENTServices } from "../../services/TOURNAMENTServices";
import Cezar from "../../components/ui/meny-time use/cezar";
import { Button, ButtonDisabled } from "../../components/ui/meny-time use/customButton";
import Repair from "../../components/ui/meny-time use/repair";
export const userwashere = 'userwashere'


export const News = ({ }: {}) => {
    const { loading, modal } = useContext<any>(SomeContext)

    const params = useParams()
    const scrollRef: any = useRef()
    const firstpost = useRequest(() => POSTServices.GETPost(0, params.iddirection, 1), ['firstpost'])
    const tournament = useRequest(() => TOURNAMENTServices.GETTouramentShort(0), ['firsttournament'])
    const post: any = useDinamickPagination(() => POSTServices.GETPost(post.offset, params.iddirection), scrollRef, ['post'], 4, 1)

    const modaltournaments = useBoolean(false)
    const modalteams = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalregistration = useBoolean(false)

    useEffect(() => {
        const userwashere_ = JSON.parse(localStorage.getItem(userwashere) as any) || { userwashere: false }
        setTimeout(() => !userwashere_.userwashere && modalregistration.on(), 3000)
    }, [])

    const navigate = useNavigate()


    ChangeTitle('новости')
    if (!params.iddirection) {
        return (
            <>
                {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
                {
                    modalregistration.boolean &&
                    <Modal function_={modal.SwapFn}>
                        <div className="dftcontainer" style={{ flexDirection: 'column', gap: '40px', padding: '40px 20px' }}>
                            <Repair />
                            <p style={{ fontSize: '20px' }}>нет аккаунта?</p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <ButtonDisabled title="позже" function_={modalregistration.off} />
                                <Button title="регистрация / вход" function_={() => navigate('/registration')} />
                            </div>
                        </div>
                    </Modal>
                }
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