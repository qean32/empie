import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";

type Props = {

}
export const Profile = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel />
                        <div>
                            <CenterPlate>
                                <div className="background"><img src="" alt="" /></div>
                                <article className="about">
                                    <p>username</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                                </article>
                            </CenterPlate>
                            <CenterPlate>
                                <div className="aboutcareer">
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                    <div><img src="" alt="" /><img src="" alt="" /></div>
                                </div>
                            </CenterPlate>
                        </div>
                        <RightPanel><></></RightPanel>
                    </>
                }
            </div>
        </>
    );
}