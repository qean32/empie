import { useContext } from "react";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { Button } from "../../components/ui/meny-time use/customButton";
import { useNavigate } from "react-router";

type Props = {

}
export const Music = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <div style={{ ...positioncenterbyabsolute, top: '40%' }}>
                        <SmallCenterPlate>
                            <div className="coniensmallwindow">
                                <Repair />
                                <p>раздел в разработке</p>
                                <Button title="назад" function_={() => navigate('/')} />
                            </div>
                        </SmallCenterPlate>
                    </div>
                }
            </div>
        </>
    );
}