import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Right } from "../../components/hoc/right";
import { LeftPanel } from "../../components/hoc/leftPanel";
import { Center } from "../../components/hoc/center";
import { ProfileChild } from "../../childrens/pages/main/profile";
import usePage from "../../customHooks/usePage";
import ProfileRightChaild from "../../childrens/other/right/profileRight";


export const Profile = ({ }: {}) => {
    const [{ }, loading]: any = usePage()
    ChangeTitle('пользователь')

    return (
        <>
            <Header />
            <div className="main">
                {loading &&
                    <MainLoader />
                }
                <>
                    <LeftPanel />
                    <Center><ProfileChild /></Center>
                    <Right><ProfileRightChaild /></Right>
                </>
            </div>
        </>
    );
}