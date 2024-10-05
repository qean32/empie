import { useContext, useState } from "react";
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
import { Center } from "../../components/hoc/center";
import { arrey } from "../../functions/GiveConst";
import useDinamicPagination from "../../customHooks/useDinamicPagination";

type Props = {
}
export const Tournaments = ({ }: Props) => {
    const { loading, modal } = useContext<any>(SomeContext)
    const [tournameents, setTournaments] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}, {}])

    const ref = useDinamicPagination(() => setTournaments((prev: any) => [...prev, ...arrey]))
    
    ChangeTitle('турниры')
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

                        {tournameents.map((el, index) => (
                            <SmallCenterPlate key={index}><TournamentChild /></SmallCenterPlate>
                        ))}

                        <div ref={ref} className="scrollhandlerref"></div>
                    </Center>
                    <DftRPanel direction={4} />
                </>
            </div>
        </>
    );
}