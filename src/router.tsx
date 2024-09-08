import { BrowserRouter, Route, Routes } from "react-router-dom"
import { News } from "./pages/main/news"

type Props = {

}
export const Router = ({ }: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<News />} path="/" />

            </Routes>
        </BrowserRouter>
    )
}