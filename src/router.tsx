import { BrowserRouter, Route, Routes } from "react-router-dom"
import { EmpieLogo } from "./components/ui/Logo"

type Props = {

}
export const Router = ({ }: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<EmpieLogo />} path="/" />

            </Routes>
        </BrowserRouter>
    )
}