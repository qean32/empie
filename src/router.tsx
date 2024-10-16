import { BrowserRouter, Route, Routes } from "react-router-dom"
import { News } from "./pages/main/news"
import { Context } from "./context"
import { Test } from "./pages/main/1test"
import { Community } from "./pages/main/community"
import { Transfers } from "./pages/main/transfers"
import { Meetings } from "./pages/direction/meetings"
import { Tournaments } from "./pages/direction/tournaments"
import { Teams } from "./pages/direction/teams"
import { P404 } from "./pages/main/p404"
import { Registration } from "./pages/main/Registration"
import { Music } from "./pages/main/music"
import { Profile } from "./pages/main/profile"
import { Team } from "./pages/direction/team"
import { Cash } from "./pages/main/cash"
import { Chat } from "./pages/main/chat"
import { Offers } from "./pages/main/offers"
import { Meeting } from "./pages/direction/meeting"
import { Tournament } from "./pages/direction/tournament"
import { EditProfile } from "./pages/main/editProfile"
import { EditTeam } from "./pages/direction/editTeam"
import { RegTeam } from "./pages/direction/regTeam"
import { Protokols } from "./pages/direction/protokols"
import { Wall } from "./pages/main/wall"

type Props = {

}
export const Router = ({ }: Props) => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    <Route element={<Test />} path="/test" />
                    <Route element={<News />} path="/" />
                    <Route element={<News />} path="/direction/:iddirection" />
                    <Route element={<Registration />} path="/registration" />
                    <Route element={<Profile />} path="/profile/:id" />
                    <Route element={<Wall />} path="/wall" />

                    <Route element={<Community />} path="/community" />
                    <Route element={<Transfers />} path="/transfers" />
                    <Route element={<Music />} path="/music" />
                    <Route element={<EditProfile />} path="/editprofile" />
                    <Route element={<Chat />} path="/chat" />
                    <Route element={<Cash />} path="/cash" />

                    <Route element={<Meetings />} path="/meetings/:iddirection" />
                    <Route element={<Tournaments />} path="/tournaments/:iddirection" />
                    <Route element={<Teams />} path="/teams/:iddirection" />

                    <Route element={<Offers />} path="/offers" />

                    <Route element={<Tournament />} path="/tournament/:id" />
                    <Route element={<Meeting />} path="/meeting/:id" />
                    <Route element={<Team />} path="/team/:id" />
                    <Route element={<EditTeam />} path="/editteam/:id" />
                    <Route element={<RegTeam />} path="/regteam/:iddirection" />
                    <Route element={<Protokols />} path="/protokols" />
                    <Route element={<P404 />} path="*" />
                </Routes>
            </Context>
        </BrowserRouter>
    )
}