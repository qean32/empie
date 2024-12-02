import { LeftPanel } from "../../components/hoc/leftPanel";
import { RightPanel } from "../../components/hoc/rightPanel";
import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { Center } from "../../components/hoc/center";
import { EditProfileChild } from "../../childrens/pages/main/editProfile";
import usePage from "../../customHooks/usePage";


export const EditProfile = ({ }: {}) => {
    const [{}, loading]: any = usePage()
    ChangeTitle('редактор профиля')

    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <LeftPanel />
                <Center><EditProfileChild /></Center>
                <Right><RightPanel><div className="dftcontainer"></div></RightPanel></Right>
            </div>
        </>
    );
}