import { useNavigate } from "react-router";
import { SmallCenterPlate } from "../../components/hoc/plates/centerPlate";
import { Button, ButtonDisabled } from "../../components/ui/meny-time use/customButton";
import { Header } from "../../components/ui/meny-time use/header";
import Repair from "../../components/ui/meny-time use/repair";
import { positioncenterbyabsolute } from "../../exports";
import ChangeTitle from "../../functions/ChangeTitle";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import usePage from "../../customHooks/usePage";


export const P404 = ({ }: {}) => {
    const navigate = useNavigate()
    const [{}, loading]: any = usePage()
    ChangeTitle('страница не найдена')
    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <div style={{ ...positioncenterbyabsolute }}>
                    <SmallCenterPlate>
                        <div className="containernsmallwindow">
                            <Repair />
                            <p>страница не найдена</p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <ButtonDisabled title="на главную" function_={() => navigate('/')} />
                                <Button title="назад" function_={() => navigate(-1)} />
                            </div>
                        </div>
                    </SmallCenterPlate>
                </div>
            </div>
        </>
    );
}