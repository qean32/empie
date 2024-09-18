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
import { Registration } from "./pages/main/registration"
import { Music } from "./pages/main/music"
import { Profile } from "./pages/main/profile"
import { Team } from "./pages/direction/team"

type Props = {

}
export const Router = ({ }: Props) => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    <Route element={<Test />} path="/test" />
                    <Route element={<News direction={false} />} path="/" />
                    <Route element={<Registration />} path="/registration" />
                    <Route element={<Profile />} path="/profile/:id" />
                    <Route element={<></>} path="/wall" />

                    <Route element={<Community />} path="/community" />
                    <Route element={<Transfers />} path="/transfers" />
                    <Route element={<Music />} path="/music" />
                    <Route element={<></>} path="/editprofile" />
                    <Route element={<></>} path="/chat" />
                    <Route element={<></>} path="/cash" />

                    <Route element={<Meetings />} path="/meetings/:iddirection" />
                    <Route element={<Tournaments />} path="/tournaments/:iddirection" />
                    <Route element={<Teams />} path="/teams/:iddirection" />

                    <Route element={<></>} path="/offers" />

                    <Route element={<News direction={false} />} path="/dota" />
                    <Route element={<News direction={false} />} path="/cs" />
                    <Route element={<News direction={false} />} path="/bascketball" />
                    <Route element={<></>} path="/tournament/:id" />
                    <Route element={<></>} path="/meeting/:id" />
                    <Route element={<Team />} path="/team/:id" />
                    <Route element={<></>} path="/editteam/:id" />
                    <Route element={<></>} path="/regteam/:iddirection" />
                    <Route element={<></>} path="/protokols/:iddirection" />
                    <Route element={<P404 />} path="*" />
                </Routes>
            </Context>
        </BrowserRouter>
    )
}