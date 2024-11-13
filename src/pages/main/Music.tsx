import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../exports";
import { Button } from "../../components/ui/meny-time use/customButton";
import { useNavigate } from "react-router";
import ChangeTitle from "../../functions/ChangeTitle";
import usePage from "../../customHooks/usePage";


export const Music = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('музыка')

    const navigate = useNavigate()

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
                                <audio loop src='/audio/serega.mp3' controls></audio>
                                <Button title="назад" function_={() => navigate('/')} />
                            </div>
                        </SmallCenterPlate>
                    </div>
                }
            </div>
        </>
    );
}