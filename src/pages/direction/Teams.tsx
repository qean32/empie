import { useContext, useEffect, useRef, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineTeam } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useNavigate, useParams } from "react-router";
import { TEAMServices } from "../../services/TEAMServices";
import { BGCs } from "../../components/ui/meny-time use/background";
import { Right } from "../../components/hoc/right";
import { RightPanel } from "../../components/hoc/rightPanel";


export const Teams = ({ }: {}) => {
    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const { loading, modal } = useContext<any>(SomeContext)

    const scrollRef: any = useRef()
    const params = useParams()
    const teams: any = useDinamickPagination(() => TEAMServices.GETTeamShort(teams.offset), scrollRef, ['teams'], 10)

    useEffect(() => {

    }, [debounsedValue])
    const direction = useParams()
    const navigate = useNavigate()

    ChangeTitle('команды')
    return (
        <>
            {Number(params.iddirection) == 3 && <BGCs />}
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
                                <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0', alignItems: 'normal' }}>
                                    <div style={{ margin: '2vh 0 4vh 2vh', width: '80%' }}>
                                        <Search value={search} setValue={setSearch} title="найти команду" />
                                    </div>
                                    <div style={{ minHeight: '500px' }}>

                                        {teams && teams.finaldata.map((item: any) => (
                                            <InlineTeam item={item} key={item.id} />
                                        ))}

                                        <div ref={scrollRef} className="scrollhandlerref"></div>
                                    </div>
                                </div>
                        </SmallCenterPlate>
                    </Center>
                    <Right>
                        <RightPanel>
                            <div className="rightcontainer">
                                <div className="rightpanellink" onClick={() => navigate(`/tournaments/${Number(direction.iddirection)}`)}>турниры</div>
                                <div className="rightpanellink" onClick={() => navigate(`/meetings/${Number(direction.iddirection)}`)}>матчи</div>
                                <div className="rightpanellink" onClick={() => navigate(`/${Number(direction.iddirection)}`)}>новости</div>
                                <div className="rightpanellink" onClick={() => navigate(`/community`)}>игроки</div>
                                <div className="rightpanellink" onClick={() => navigate(`/transfers/`)}>трансферы</div>
                                <div className="rightpanellink" onClick={() => navigate(`/teams/${Number(direction.iddirection)}`)}>команды</div>
                            </div>
                        </RightPanel>
                        <RightPanel>
                            <div className="rightcontainer">
                                <div className="rightpanellink"
                                    onClick={() => navigate(`/regteam/${Number(direction.iddirection)}`)}>регистрация команды</div>
                            </div>
                        </RightPanel>
                    </Right>
                </>
            </div>
        </>
    );
}