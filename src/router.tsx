import { BrowserRouter, Route, Routes } from "react-router-dom"
import { News } from "./pages/main/news"
import { Context } from "./context"
import { Test } from "./pages/main/1test"

type Props = {

}
export const Router = ({ }: Props) => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    <Route element={<News />} path="/" />
                    <Route element={<Test />} path="/test" />

                </Routes>
            </Context>
        </BrowserRouter>
    )
}