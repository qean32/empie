import { useContext } from "react";
import { ModalDirectionChildren } from "../../childrens/modalDirection";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { Modal } from "../../components/ui/meny-time use/modal";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { TournamentChild } from "../../childrens/tournament";
import { DftRPanel } from "../../components/hoc/dftrPanel";
import ChangeTitle from "../../functions/ChangeTitle";

type Props = {
}
export const Tournaments = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    ChangeTitle('турниры')
    return (
        <>
            {modal.boolean && <Modal function_={modal.SwapFn}><ModalDirectionChildren function_={modal.SwapFn} /></Modal>}
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={modal.SwapFn} />
                        <div className="center">
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                            <SmallCenterPlate><TournamentChild /></SmallCenterPlate>
                        </div>
                        <DftRPanel direction={4} />
                    </>
                }
            </div>
        </>
    );
}