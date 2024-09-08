import { CenterPlate } from "../../components/big/centerPlate";
import { LeftPanel } from "../../components/big/leftPanel";
import { RightPanel } from "../../components/big/rightPanel";
import { Header } from "../../components/ui/header"

type Props = {

}
export const News = ({ }: Props) => {
    return (
        <>
            <Header />
            <div>
                <LeftPanel />
                <div className="center">
                    <CenterPlate />
                    <CenterPlate />
                </div>
                <RightPanel />
            </div>
        </>
    );
}