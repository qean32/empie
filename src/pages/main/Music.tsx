import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";

type Props = {

}
export const Music = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <div style={{ ...positioncenterbyabsolute, top: '40%' }}>
                        <CenterPlate>
                            <div className="techwork">
                                <Repair />
                                <p>раздел в разработке</p>
                            </div>
                        </CenterPlate>
                    </div>
                }
            </div>
        </>
    );
}