import { useContext } from "react";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { Header } from "../../components/ui/meny-time use/header";
import ChangeTitle from "../../functions/ChangeTitle";

type Props = {

}
export const Techwork = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    ChangeTitle('тех работы')
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <div style={{ ...positioncenterbyabsolute, top: '40%' }}>
                            <SmallCenterPlate>
                                <div className="coniensmallwindow">
                                    <Repair />
                                    <p>ведутся работы</p>
                                </div>
                            </SmallCenterPlate>
                        </div>
                    </>
                }
            </div>
        </>
    );
}