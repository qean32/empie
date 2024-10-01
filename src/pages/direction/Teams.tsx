import { useContext, useEffect, useRef, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineTeam } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import useHandlerScroll from "../../customHooks/useHandlerScroll";
import { arrey } from "../../functions/GiveConst";

type Props = {
}
export const Teams = ({ }: Props) => {
    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const { loading, modal } = useContext<any>(SomeContext)
    const [teams, setTeams] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

    const scrollRef = useRef<any>()
    const HandlerScroll = useHandlerScroll(scrollRef)

    useEffect(() => {
        console.log(scrollRef, HandlerScroll)
        if (HandlerScroll) {
            setTimeout(() =>
                setTeams((prew: any[]) => [...prew, ...arrey])
                , 600)
        }
    }, [HandlerScroll])

    useEffect(() => {

    }, [debounsedValue])

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
                            <div className="dftcontainer" style={{ flexDirection: 'column', padding: '0', alignItems: 'normal', minWidth: '560px'}}>
                                <div style={{ margin: '2vh 0 4vh 2vh', width: '80%' }}>
                                    <Search value={search} setValue={setSearch} title="найти команду" />
                                </div>
                                <div style={{ minHeight: '500px' }}>

                                    {teams.map((el, index) => (
                                        <InlineTeam key={index} />
                                    ))}

                                    <div ref={scrollRef} className="scrollhandlerref"></div>
                                </div>
                            </div>
                        </SmallCenterPlate>
                    </Center>
                    <DftRPanel direction={4} />
                </>
            </div>
        </>
    );
}