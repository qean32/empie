import {  useEffect, useRef, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/other/modalDirection";
import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/hoc/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import useBoolean from "../../customHooks/useBoolean";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { PLAYERServices } from "../../services/PLAYERServices";
import Repair from "../../components/ui/meny-time use/repair";
import usePage from "../../customHooks/usePage";


export const Community = ({ }: {}) => {
    const [modal, loading]: any = usePage()
    ChangeTitle('сообщество')

    const [search, setSearch] = useState<string>('')
    const [searchValue, setSearchValue] = useState<any[]>()
    const debounsedValue = useDebounce(search)

    const scrollRef: any = useRef()
    const player: any = useDinamickPagination(() => PLAYERServices.GETPlayer(player.offset), scrollRef, ['users'], 10, 0)

    const modalmeetings = useBoolean(false)
    const modaltournaments = useBoolean(false)
    const modalteams = useBoolean(false)

    useEffect(() => {
        PLAYERServices.GETPlayer(0, '', '', '', 12, debounsedValue)
            .then((results) => setSearchValue(results?.results))
    }, [debounsedValue])

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
                            <div style={{ minHeight: '500px', position: 'relative' }}>

                                {
                                    !debounsedValue ?
                                        player && player.finaldata.map((item: any) => (
                                            <InlineUser item={item} key={item.id} />
                                        ))
                                        :
                                        searchValue && searchValue.length > 0 ?
                                            searchValue.map((item: any) => (
                                                <InlineUser item={item} key={item.id} />
                                            ))
                                            :
                                            <div className="positioncenterbyabsolute"
                                                style={{ width: '200px' }}>
                                                <Repair />
                                                <p>нет результатов с таким значением</p>
                                            </div>
                                }

                                <div ref={scrollRef} className="scrollhandlerref"></div>
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