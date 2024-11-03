import { useNavigate, useParams } from "react-router";
import { RightPanel } from "../../../components/hoc/rightPanel";
import { useContext } from "react";
import { useMutation } from "react-query";
import { SomeContext } from "../../../context";
import useRequest from "../../../customHooks/useRequest";
import { OFFERServices } from "../../../services/OFFERServices";
import { TEAMServices } from "../../../services/TEAMServices";
import { USERServices } from "../../../services/USERServices";

const ProfileRightChaild = () => {
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
    const navigate = useNavigate()

    return (
        <>
            <RightPanel>
                <div className="rightcontainer">
                    {params.id == user?.user_id && <div className="rightpanellink" onClick={USERServices.LOGOUTUser}>выйти</div>}
                    {params.id == user?.user_id && <div className="rightpanellink" onClick={() => navigate('/editprofile')}>редактировать</div>}
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
        </>
    );
}

export default ProfileRightChaild;