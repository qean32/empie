import { useContext, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren, RightPanelDirectionChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { RightTransferChild } from "../../childrens/rightTransfer";
import { TopTeamChild } from "../../childrens/topTeam";
import { StreamChild } from "../../childrens/stream";
import useBoolean from "../../customHooks/useBoolean";
import ChangeTitle from "../../functions/ChangeTitle";
import { InputComent, LikeComent } from "../../components/ui/one-time use/InterfacePost";
import { Post } from "../../components/ui/meny-time use/post";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { TournamentChild } from "../../childrens/tournament";
import { MoveonGridChild } from "../../childrens/moveongrid";

type Props = {
    direction: boolean | string
}
export const News = ({ direction = false }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)

    ChangeTitle('новости')

    if (!direction) {
        return (
            <>
                {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
                {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
                {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
                {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
                <Header />
                <div className="main">
                    {loading ? <MainLoader /> :
                        <>
                            <LeftPanel function_={modal.SwapFn} />
                            <Center>
                                <SmallCenterPlate>
                                    <div className="dftcontainer" style={{ justifyContent: 'start' }}>
                                        <div style={{ margin: '10px 60px' }}>
                                            <p style={{ fontSize: '30px' }}>СТАНЬ</p>
                                            <p style={{ fontSize: '30px', margin: '-5px 20px' }}>ОДНИМ ИЗ НАС</p>
                                        </div>
                                    </div>
                                </SmallCenterPlate >
                                <SmallCenterPlate>
                                    <TournamentChild />
                                </SmallCenterPlate>
                                <SmallCenterPlate>
                                    <Post />
                                </SmallCenterPlate>
                                <SmallCenterPlate>
                                    <Post />
                                </SmallCenterPlate>
                                <SmallCenterPlate>
                                    <Post />
                                </SmallCenterPlate>
                            </Center>
                            <Right>
                                <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
                                <RightPanel><MoveonGridChild /></RightPanel>
                                <RightPanel><RightTransferChild /></RightPanel>
                                <RightPanel><TopTeamChild /></RightPanel>
                                <RightPanel><StreamChild /></RightPanel>
                            </Right>
                        </>
                    }
                </div>
            </>
        );
    }

    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <div className="center">
                        <SmallCenterPlate>
                            <div className="likecoment">
                                <img src="/svg/like.svg" alt="" />
                            </div>
                        </SmallCenterPlate>
                    </div>
                    <div>
                        <RightPanel><RightPanelDirectionChildren direction={0} /></RightPanel>
                        <RightPanel><TopTeamChild /></RightPanel>
                        <RightPanel><RightTransferChild /></RightPanel>
                        <RightPanel><StreamChild /></RightPanel>
                    </div>
                </div>}
        </>
    )
}