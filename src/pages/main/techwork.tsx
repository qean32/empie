import { useContext } from "react";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { FakeHeader } from "../../components/ui/meny-time use/header";
import ChangeTitle from "../../functions/ChangeTitle";


export const Techwork = ({ }: {}) => {
    const { loading } = useContext<any>(SomeContext)
    ChangeTitle('тех работы')
    return (
        <>
            <FakeHeader />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <div style={{ ...positioncenterbyabsolute, top: '50%' }}>
                    <SmallCenterPlate>
                        <div className="containernsmallwindow">
                            <Repair />
                            <p>ведутся работы</p>
                        </div>
                    </SmallCenterPlate>
                </div>
            </div>
        </>
    );
}