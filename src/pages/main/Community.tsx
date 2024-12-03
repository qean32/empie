import { useEffect, useRef, useState } from "react";
import { RightPanelChildren } from "../../childrens/other/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { PLAYERServices } from "../../services/PLAYERServices";
import Repair from "../../components/ui/meny-time use/repair";
import usePage from "../../customHooks/usePage";


export const Community = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('сообщество')

    const [search, setSearch] = useState<string>('')
    const [searchValue, setSearchValue] = useState<any[]>()
    const debounsedValue = useDebounce(search)

    const scrollRef: any = useRef()
    const player: any = useDinamickPagination(() => PLAYERServices.GETPlayer(player.offset), scrollRef, ['users'], 10, 0)

    useEffect(() => {
        PLAYERServices.GETPlayer(0, '', '', '', 12, debounsedValue)
            .then((results) => setSearchValue(results?.results))
    }, [debounsedValue])

    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel />
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
                    <RightPanel><RightPanelChildren /></RightPanel>
                </Right>
            </div>
        </>
    );
}