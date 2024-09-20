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

type Props = {
    direction: boolean | string
}
export const News = ({ direction = false }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)

    ChangeTitle('новости')
    const [like, setLike] = useState(false)
    const [like_, setLike_] = useState(false)
    const [value, setValue] = useState('')

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
                            <div className="center">
                                <SmallCenterPlate>
                                    <div className="container" style={{ padding: '20px 30px', flexDirection: 'column' }}>
                                        <div className="post">
                                            <div>
                                                <div className="postsimg"><div className="ava"></div><img src="" alt="" className="postimg" /></div>
                                            </div>
                                            <div>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati rem! Dignissimos eveniet quisquam nulla obcaecati saepe </p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'end' }}>
                                                <LikeComent islike={true} value={like} setValue={setLike} />
                                                <LikeComent islike={false} value={like_} setValue={setLike_} />
                                            </div>
                                        </div>
                                        <div className="coments" style={{ overflow: 'hidden', height: '0'}}>
                                            <InputComent value={""} setValue={() => undefined} title={"ваш коментарий.."} />
                                            <div className="postsimg" style={{ flexDirection: 'column', gap: '15px' }}><div className="ava"></div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, magnam.sit amet consectetur adipisicing elit. Totam, magnam. </p></div>
                                            <div className="postsimg" style={{ flexDirection: 'column', gap: '15px' }}><div className="ava"></div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, magnam.sit amet consectetur adipisicing elit. Totam, magnam. </p></div>
                                        </div>
                                    </div>
                                </SmallCenterPlate>
                                <SmallCenterPlate>
                                    <div className="container" style={{ padding: '20px 30px', flexDirection: 'column' }}>
                                        <div className="post">
                                            <div>
                                                <div className="postsimg"><div className="ava"></div><img src="" alt="" className="postimg" /></div>
                                            </div>
                                            <div>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, obcaecati rem! Dignissimos eveniet quisquam nulla obcaecati saepe </p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'end' }}>
                                                <LikeComent islike={true} value={like} setValue={setLike} />
                                                <LikeComent islike={false} value={like_} setValue={setLike_} />
                                            </div>
                                        </div>
                                        <div className="coments">
                                            <InputComent value={""} setValue={() => undefined} title={"ваш коментарий.."} />
                                            <div className="postsimg" style={{ flexDirection: 'column', gap: '15px' }}><div className="ava"></div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, magnam.sit amet consectetur adipisicing elit. Totam, magnam. </p></div>
                                            <div className="postsimg" style={{ flexDirection: 'column', gap: '15px' }}><div className="ava"></div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, magnam.sit amet consectetur adipisicing elit. Totam, magnam. </p></div>
                                        </div>
                                    </div>
                                </SmallCenterPlate>
                            </div>
                            <div>
                                <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalmeetings.on} /></RightPanel>
                                <RightPanel><RightTransferChild /></RightPanel>
                                <RightPanel><TopTeamChild /></RightPanel>
                                <RightPanel><StreamChild /></RightPanel>
                            </div>
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