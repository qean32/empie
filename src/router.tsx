import { BrowserRouter, Route, Routes } from "react-router-dom"
import { News } from "./pages/main/news"
import { Techwork } from "./pages/main/techwork"

type Props = {

}
export const Router = ({ }: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<News />} path="/" />
                <Route element={<Techwork />} path="/techwork" />

            </Routes>
        </BrowserRouter>
    )
}