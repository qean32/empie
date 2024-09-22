import { useNavigate } from "react-router";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Button } from "../../components/ui/meny-time use/customButton";
import { Header } from "../../components/ui/meny-time use/header";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import ChangeTitle from "../../functions/ChangeTitle";

type Props = {

}
export const P404 = ({ }: Props) => {
    const navigate = useNavigate()
    ChangeTitle('страница не найдена')
    return (
        <>
            <Header />
            <div className="main">
                <div style={{ ...positioncenterbyabsolute }}>
                    <SmallCenterPlate>
                        <div className="containernsmallwindow">
                            <Repair />
                            <p>страница не найдена</p>
                            <div>
                                <Button title="назад" function_={() => navigate(-1)}/>
                                <Button title="на главную" function_={() => navigate('/')}/>
                            </div>
                        </div>
                    </SmallCenterPlate>
                </div>
            </div>
        </>
    );
}