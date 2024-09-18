import { useContext, useEffect, useState } from "react";
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

type Props = {
}
export const Teams = ({ }: Props) => {
    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const { loading, modal } = useContext<any>(SomeContext)

    useEffect(() => {

    }, [debounsedValue])
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <div className="center">
                            <SmallCenterPlate>
                                <div style={{ padding: '20px' }}>
                                    <Search value={search} setValue={setSearch} title="найти команду" width={60} />
                                </div>
                                <InlineTeam />
                                <InlineTeam />
                                <InlineTeam />
                                <InlineTeam />
                                <InlineTeam />
                                <InlineTeam />
                            </SmallCenterPlate>
                        </div>
                        <DftRPanel direction={4} />
                    </>
                }
            </div>
        </>
    );
}