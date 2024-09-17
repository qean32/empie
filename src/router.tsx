import { BrowserRouter, Route, Routes } from "react-router-dom"
import { News } from "./pages/main/News"
import { Context } from "./context"
import { Test } from "./pages/main/1Test"
import { Community } from "./pages/main/Community"
import { Transfers } from "./pages/main/Transfers"
import { Meetings } from "./pages/direction/Meetings"
import { Tournaments } from "./pages/direction/Tournaments"
import { Teams } from "./pages/direction/Teams"
import { P404 } from "./pages/main/P404"
import { Registration, Registretion } from "./pages/main/Registration"
import { Music } from "./pages/main/Music"

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
                    <Route element={<></>} path="/profile/:id" />
                    <Route element={<></>} path="/wall" />

                    <Route element={<Community />} path="/community" />
                    <Route element={<Transfers />} path="/transfers" />
                    <Route element={<Music />} path="/music" />
                    <Route element={<></>} path="/editprofile" />
                    <Route element={<></>} path="/chat" />
                    <Route element={<></>} path="/cash" />

                    <Route element={<Meetings />} path="/meeting/:iddirection" />
                    <Route element={<Tournaments />} path="/tournaments/:iddirection" />
                    <Route element={<Teams />} path="/teams/:iddirection" />

                    <Route element={<></>} path="/offers" />

                    <Route element={<News direction={false} />} path="/" />
                    <Route element={<></>} path="/tournament/:id" />
                    <Route element={<></>} path="/meeting/:id" />
                    <Route element={<></>} path="/team/:id" />
                    <Route element={<></>} path="/editteam/:id" />
                    <Route element={<></>} path="/regteam/:iddirection" />
                    <Route element={<></>} path="/protokols/:iddirection" />
                    <Route element={<P404 />} path="*" />
                </Routes>
            </Context>
        </BrowserRouter>
    )
}