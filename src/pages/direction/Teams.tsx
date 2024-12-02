import { useEffect, useRef, useState } from "react";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import useDebounce from "../../customHooks/useDebounce";
import { InlineTeam } from "../../components/ui/meny-time use/inlinePrezentation";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useDinamickPagination from "../../customHooks/useDinamickPagination";
import { useParams } from "react-router";
import { TEAMServices } from "../../services/TEAMServices";
import { BGCs } from "../../components/ui/meny-time use/background";
import { Right } from "../../components/hoc/right";
import Repair from "../../components/ui/meny-time use/repair";
import usePage from "../../customHooks/usePage";
import TeamsRightChaild from "../../childrens/other/right/teamsRight";


export const Teams = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('команды')

    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const [searchValue, setSearchValue] = useState<any[]>()

    const scrollRef: any = useRef()
    const params = useParams()
    const teams: any = useDinamickPagination(() => TEAMServices.GETTeamShort(teams.offset, params?.iddirection), scrollRef, ['teams'], 10)


    useEffect(() => {
        TEAMServices.GETTeamShort(0, params?.iddirection, 12, debounsedValue)
            .then((results) => setSearchValue(results?.results))
    }, [debounsedValue])

    return (
        <>
            {Number(params.iddirection) == 3 && <BGCs />}
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
                    <Center>
                        <SmallCenterPlate>
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0', alignItems: 'normal' }}>
                                <div style={{ margin: '2vh 0 4vh 2vh', width: '80%' }}>
                                    <Search value={search} setValue={setSearch} title="найти команду" />
                                </div>
                                <div style={{ minHeight: '500px' }}>

                                    {
                                        !debounsedValue ?
                                            teams && teams.finaldata.map((item: any) => (
                                                <InlineTeam item={item} key={item.id} />
                                            ))
                                            :
                                            searchValue && searchValue.length > 0 ?
                                                searchValue.map((item: any) => (
                                                    <InlineTeam item={item} key={item.id} />
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
                    <Right><TeamsRightChaild /></Right>
                </>
            </div>
        </>
    );
}