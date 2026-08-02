import { Route, Routes } from "react-router"
import { HomePage } from "../presentation/Pages/homePage"
import { Navbar } from "../presentation/layout/Navbar"
import { BubleSortComponent, InsertionSortComponent, SelectionSortComponent } from "../components"


export const AppRouter = () => {
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/bubleSort" element={<BubleSortComponent/>}/>
                <Route path="/insertionSort" element={<InsertionSortComponent/>}/>
                <Route path="/selectionSort" element={<SelectionSortComponent/>}/>
            </Routes>
        </div>
    )
}