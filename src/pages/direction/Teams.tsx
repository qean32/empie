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
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useParams } from "react-router";
import { TEAMServices } from "../../services/TEAMServices";


export const Teams = ({ }: {}) => {
    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const { loading, modal } = useContext<any>(SomeContext)

    const scrollRef: any = useRef()
    const teams: any = useDinamickPagination(() => TEAMServices.GETTeamShort(teams.offset), scrollRef, 'teams')

    useEffect(() => {

    }, [debounsedValue])
    const direction = useParams()

    ChangeTitle('команды')
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
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0', alignItems: 'normal' }}>
                                <div style={{ margin: '2vh 0 4vh 2vh', width: '80%' }}>
                                    <Search value={search} setValue={setSearch} title="найти команду" />
                                </div>
                                <div style={{ minHeight: '500px' }}>

                                    {teams && teams.finaldata.map((el: any) => (
                                        <InlineTeam />
                                    ))}

                                    <div ref={scrollRef} className="scrollhandlerref"></div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <DftRPanel direction={Number(direction.iddirection)} />
                </>
            </div>
        </>
    );
}