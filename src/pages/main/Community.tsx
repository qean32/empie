import { useContext, useEffect, useState } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { RightPanelChildren } from "../../childrens/rightPanel";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Search } from "../../components/ui/meny-time use/customInput";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import useDebounce from "../../customHooks/useDebounce";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";

type Props = {

}
export const Community = ({ }: Props) => {
    const [search, setSearch] = useState<string>('')
    const debounsedValue = useDebounce(search)
    const { loading, modal } = useContext<any>(SomeContext)

    useEffect(() => {
    }, [debounsedValue])
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            {loading ? <div className="main"><MainLoader /></div> :
                <div className="main">
                    <LeftPanel function_={modal.SwapFn} />
                    <div className="center">
                        <CenterPlate>
                            <div style={{ padding: '20px' }}>
                                <Search value={search} setValue={setSearch} title="найти человека" width={45} />
                            </div>
                            <InlineUser />
                            <InlineUser />
                            <InlineUser />
                            <InlineUser />
                            <InlineUser />
                            <InlineUser />
                            <InlineUser />
                        </CenterPlate>
                    </div>
                    <RightPanel><RightPanelChildren /></RightPanel>
                </div>}
        </>
    );
}