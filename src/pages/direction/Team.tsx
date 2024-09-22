import { useContext } from "react";
import { CenterPlate } from "../../components/hoc/plates/centerPlate";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import { SomeContext } from "../../context";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { InlineUser } from "../../components/ui/meny-time use/inlinePrezentation";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { Right } from "../../components/hoc/right";

type Props = {

}
export const Team = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)
    ChangeTitle('команда')
    return (
        <>
            <Header />
            <div className="main">
                {loading ? <MainLoader /> :
                    <>
                        <LeftPanel function_={() => undefined} />
                        <Center>
                            <CenterPlate>
                                <div className="dftcontainer">
                                    <div className="background"><img src="" alt="" /></div>
                                    <article className="about">
                                        <p>teamname</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium?</p>
                                        <p style={{ fontSize: '1.6vh' }}>матчи: 23/32 турниры: 2/3 показатели: 52%</p>
                                    </article>
                                </div>
                            </CenterPlate>
                            <CenterPlate>
                                <div className="dftcontainer">
                                    <div className="trophy">
                                        <div>
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </CenterPlate>
                            <CenterPlate>
                                <div className="dftcontainer">
                                    <div>
                                        <div className="kep">
                                            <InlineUser />
                                        </div>
                                        <InlineUser />
                                        <InlineUser />
                                        <InlineUser />
                                        <InlineUser />
                                    </div>
                                </div>
                            </CenterPlate>
                        </Center>
                        <Right>
                            <RightPanel><></></RightPanel>
                        </Right>
                    </>
                }
            </div>
        </>
    );
}