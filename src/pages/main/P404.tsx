import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Button } from "../../components/ui/meny-time use/customButton";
import { Header } from "../../components/ui/meny-time use/header";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";

type Props = {

}
export const P404 = ({ }: Props) => {
    return (
        <>
            <Header />
            <div className="main">
                <div style={{ ...positioncenterbyabsolute }}>
                    <CenterPlate>
                        <div className="coniensmallwindow" style={{ height: '380px' }}>
                            <Repair />
                            <p>страница не найдена</p>
                            <div>
                                <Button title="назад" />
                                <Button title="на главную" />
                            </div>
                        </div>
                    </CenterPlate>
                </div>
            </div>
        </>
    );
}