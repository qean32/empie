import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";

type Props = {

}
export const News = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    return (
        <>
            <Header />
            {loading ? <div><MainLoader /></div> :
                <div>
                    <LeftPanel />
                    <div className="center">
                        {/* <CenterPlate /> */}
                    </div>
                </div>}
        </>
    );
}