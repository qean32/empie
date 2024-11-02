import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";
import { Modal } from "../../components/hoc/modal";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { TeamChild } from "../../childrens/pages/direction/team";
import { useNavigate, useParams } from "react-router";
import useRequest from "../../customHooks/useRequest";
import { TEAMServices } from "../../services/TEAMServices";
import { useMutation } from "react-query";
import { TRANSFERServices } from "../../services/TRANSFERServices copy";
import usePage from "../../customHooks/usePage";


export const Team = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    const params: any = useParams()
    const team = useRequest(() => TEAMServices.GETTeam(0, params.id), ['team'])
    const { user }: any = useContext(SomeContext)
    const navigate = useNavigate()
    ChangeTitle('команда')

    const regtransfer: any = useMutation(['regtransfer'], () => TRANSFERServices.CREATETransfer({ script: 3, user: user?.user_id, team: params.id }))

    const DeleteTeam = () => {
        let accept = confirm('Вы действительно хотите распустить команду?')
        accept && TEAMServices.DELETETeam(params.id).then(() => regtransfer.mutate()).then(() => navigate('/'))
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
                    <Center><TeamChild /></Center>
                    <Right>
                        <RightPanel>
                            <div className="rightcontainer">
                                {team.finaldata[0]?.director?.id == user?.user_id &&
                                    <div className="rightpanellink" onClick={DeleteTeam}>
                                        удалить команду
                                    </div>
                                }
                            </div>
                        </RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}