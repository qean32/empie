import { useContext } from "react";
import { Header } from "../../components/ui/meny-time use/header";
import { SomeContext } from "../../context";
import { MainLoader } from "../../components/ui/meny-time use/loader";
import ChangeTitle from "../../functions/ChangeTitle";
import { Center } from "../../components/hoc/center";
import { TournamentChild } from "../../childrens/pages/direction/tournament";
type Props = {
}
export const Tournament = ({ }: Props) => {
    const { loading } = useContext<any>(SomeContext)

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