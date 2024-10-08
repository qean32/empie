import { useContext, useEffect, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import useBoolean from "../../customHooks/useBoolean";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { arrey } from "../../functions/GiveConst";
import useDinamicPagination from "../../customHooks/useDinamicPagination";

type Props = {

}
export const Community = ({ }: Props) => {
    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const { loading, modal } = useContext<any>(SomeContext)
    const [users, setUsers] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}, {}, {}])

    const ref = useDinamicPagination(() => setUsers((prev: any) => [...prev, ...arrey]))

    const modaltournaments = useBoolean(false)
    const modalmeetings = useBoolean(false)
    const modalteams = useBoolean(false)

    useEffect(() => {
    }, [debounsedValue])

    ChangeTitle('сообщество')
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            {modalteams.boolean && <Modal function_={modalteams.off}><ModalDirectionChildren function_={modalteams.off} link="teams" /></Modal>}
            {modalmeetings.boolean && <Modal function_={modalmeetings.off}><ModalDirectionChildren function_={modalmeetings.off} link="meetings" /></Modal>}
            {modaltournaments.boolean && <Modal function_={modaltournaments.off}><ModalDirectionChildren function_={modaltournaments.off} link="tournaments" /></Modal>}
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel function_={modal.SwapFn} />
                <Center>
                    <SmallCenterPlate>
                        <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0', alignItems: 'normal' }}>
                            <div style={{ margin: '2vh 0 4vh 2vh', width: '80%' }}>
                                <Search value={search} setValue={setSearch} title="найти человека" />
                            </div>
                            <div style={{ minHeight: '500px' }}>
                                {users.map((el, index) => (
                                    <InlineUser key={index} />
                                ))}

                                <div ref={ref} className="scrollhandlerref"></div>
                            </div>
                        </div>
                    </SmallCenterPlate>
                </Center>
                <Right>
                    <RightPanel><RightPanelChildren fn1={modaltournaments.on} fn3={modalmeetings.on} fn2={modalteams.on} /></RightPanel>
                </Right>
            </div>
        </>
    );
}