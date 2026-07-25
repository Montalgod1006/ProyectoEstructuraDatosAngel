import { Route, Routes } from "react-router"
import { HomePage } from "../presentation/Pages/homePage"
import { BubleSortComponent } from "../components/bubleSortComponent"
import { Navbar } from "../presentation/layout/Navbar"

export const AppRouter = () => {
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/bubleSort" element={<BubleSortComponent/>}/>
            </Routes>
        </div>
    )
}