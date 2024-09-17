import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { positioncenterbyabsolute } from "../../functions/GiveConst";

type Props = {

}
export const Registration = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <div style={{ ...positioncenterbyabsolute, top: '40%' }}>
                        <CenterPlate>
                            <div className="techwork">
                            </div>
                        </CenterPlate>
                    </div>
                }
            </div>
        </>
    );
}