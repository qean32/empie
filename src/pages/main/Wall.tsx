import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren } from "../../childrens/rightPanel";
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
import { Post } from "../../components/ui/meny-time use/post";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import Repair from "../../components/ui/meny-time use/repair";

type Props = {
}
export const Wall = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)

    ChangeTitle('стенка')
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
                                <div className="dftcontainer" style={{ flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ padding: '0 40px' }}>
                                        <p style={{ margin: '10px 0' }}>действующая версия: 3.00</p>
                                        <Repair />
                                        <div>
                                            <p style={{ margin: '5px 0' }}>о нас</p>
                                            <p>приложение разработанно как платформа для организации и проведения турниров и товарищеских встреч по различным спортивным - киберспортивным дисциплинам</p>
                                        </div>
                                        <div className="reference">
                                            <a title="наш дискорд" href="https://t.me/+xJIMXDHnrvwyMjMy" target="_blank"><img src="/svg/telegram.svg" alt="" /></a>
                                            <a title="наш телеграм" href="https://discord.gg/saN3mAmyyp" target="_blank"><img src="/svg/discord.svg" alt="" /></a>
                                            <a title="исходный код" href=""><img src="/svg/github.svg" alt="" /></a>
                                            <a title="исходный код" href=""><img src="/svg/github.svg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
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