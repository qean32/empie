import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Center } from "../../components/hoc/center";
import { ProfileChild } from "../../childrens/pages/main/profile";
import { useParams } from "react-router";
import { USERServices } from "../../services/USERServices";
import useRequest from "../../customHooks/useRequest";
import { TEAMServices } from "../../services/TEAMServices";
import { useMutation } from "react-query";
import { OFFERServices } from "../../services/OFFERServices";
import usePage from "../../customHooks/usePage";


export const Profile = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    const params = useParams()
    const { user }: any = useContext(SomeContext)
    const getteamCS = user?.user_id ? useRequest(() => TEAMServices.GETTeam(0, '', user?.user_id, 1), ['getteamdirector__']) : null
    const getteamDOTA = user?.user_id ? useRequest(() => TEAMServices.GETTeam(0, '', user?.user_id, 2), ['getteamdirector_']) : null

    const crateofferDOTA = useMutation(() => OFFERServices.CREATEOffer({ team: getteamDOTA?.finaldata[0]?.id, direction: 2, user: params.id })
        .then(() => location.reload())
    )
    const crateofferCS = useMutation(() => OFFERServices.CREATEOffer({ team: getteamCS?.finaldata[0]?.id, direction: 2, user: params.id })
        .then(() => location.reload())
    )
    ChangeTitle('пользователь')
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
                    <Center><ProfileChild /></Center>
                    <Right>
                        <RightPanel>
                            <div className="rightcontainer">
                                {params.id == user?.user_id && <div className="rightpanellink" onClick={USERServices.LOGOUTUser}>выйти</div>}
                                {
                                    getteamCS && getteamCS.finaldata[0] &&
                                    params.id != getteamCS?.finaldata[0]?.director?.id &&
                                    <div className="rightpanellink" onClick={() => crateofferCS.mutate()}>инвайт CS</div>
                                }
                                {
                                    getteamDOTA && getteamDOTA.finaldata[0] &&
                                    params.id != getteamCS?.finaldata[0]?.director?.id &&
                                    <div className="rightpanellink" onClick={() => crateofferDOTA.mutate()}>инвайт DOTA</div>
                                }
                            </div>
                        </RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}