import { useContext, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
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
import useDinamicPagination from "../../customHooks/useDinamicPagination";
import { arrey } from "../../functions/GiveConst";
import { useParams } from "react-router";

type Props = {
}
export const News = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const [posts, setPosts] = useState<any[]>([{}, {}])

    const ref = useDinamicPagination(() => setPosts((prev: any) => [...prev, ...arrey]))

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)

    const direction = useParams()

    console.log(direction)

    ChangeTitle('новости')

    if (!direction.iddirection) {
        return (
            <>
                {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
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

                            <SmallCenterPlate>
                                <div className="dftcontainer" style={{
                                    justifyContent: 'start', backgroundImage: 'url(/img/cezar.webp)',
                                    backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: '120%'
                                }}>
                                    <div style={{ margin: '10px 60px' }}>
                                        <p style={{ fontSize: '30px' }}>СТАНЬ</p>
                                        <p style={{ fontSize: '30px', margin: '-5px 20px' }}>ОДНИМ ИЗ НАС</p>
                                    </div>
                                </div>
                            </SmallCenterPlate >

                            <DftPost />

                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>

                            {posts.map((el, index) => (
                                <DftPost key={index} />
                            ))}

                            <div ref={ref} className="scrollhandlerref"></div>

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

                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{
                                justifyContent: 'start', backgroundImage: 'url(/img/cezar.webp)',
                                backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: '120%'
                            }}>
                                <div style={{ margin: '10px 60px' }}>
                                    <p style={{ fontSize: '30px' }}>СТАНЬ</p>
                                    <p style={{ fontSize: '30px', margin: '-5px 20px' }}>ОДНИМ ИЗ НАС</p>
                                </div>
                            </div>
                        </SmallCenterPlate >

                        <DftPost />

                        <SmallCenterPlate><TournamentChild /></SmallCenterPlate>

                        {posts.map((el, index) => (
                            <DftPost key={index} />
                        ))}

                        <div ref={ref} className="scrollhandlerref"></div>
                    </Center>

                    <Right>
                        <RightPanel><RightPanelDirectionChildren direction={Number(direction.iddirection)} /></RightPanel>
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

type PropsDftPost = {

}
export const DftPost = ({ }: PropsDftPost) => {
    return (
        <SmallCenterPlate>
            <Post />
        </SmallCenterPlate>
    );
}