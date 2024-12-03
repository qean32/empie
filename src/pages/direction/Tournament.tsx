import { Header } from "../../components/ui/meny-time use/header";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { TournamentChild } from "../../childrens/pages/direction/tournament";
import usePage from "../../customHooks/usePage";


export const Tournament = ({ }: {}) => {
    const [{}, loading]: any = usePage()
    ChangeTitle('турнир')

    return (
        <>
            <Header />
            {loading &&
                <MainLoader />
            }
            <div className="main">
                <Center>
                    <TournamentChild />
                </Center>
            </div>
        </>
    )
}