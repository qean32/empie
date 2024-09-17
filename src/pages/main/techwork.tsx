import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { Header } from "../../components/ui/meny-time use/header";

type Props = {

}
export const Techwork = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)

    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <div style={{ ...positioncenterbyabsolute, top: '40%' }}>
                            <CenterPlate>
                                <div className="techwork">
                                    <Repair />
                                    <p>ведутся работы</p>
                                </div>
                            </CenterPlate>
                        </div>
                    </>
                }
            </div>
        </>
    );
}