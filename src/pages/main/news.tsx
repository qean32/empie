import { useContext } from "react";
import { CenterPlate } from "../../components/big/centerPlate";
import { LeftPanel } from "../../components/big/leftPanel";
import { RightPanel } from "../../components/big/rightPanel";
import { Header } from "../../components/ui/header"
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/loader";

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
                    <RightPanel />
                </div>}
        </>
    );
}