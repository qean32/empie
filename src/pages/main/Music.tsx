import { useContext } from "react";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../functions/GiveConst";
import { SomeContext } from "../../context";
import { Button } from "../../components/ui/meny-time use/customButton";
import { useNavigate } from "react-router";
import ChangeTitle from "../../functions/ChangeTitle";

type Props = {

}
export const Music = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    const navigate = useNavigate()

    ChangeTitle('музыка')
    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                {loading ? <MainLoader /> :
                    <div style={{ ...positioncenterbyabsolute, top: '50%' }}>
                        <SmallCenterPlate>
                            <div className="containernsmallwindow">
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