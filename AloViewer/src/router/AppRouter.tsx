import { Route, Routes } from "react-router"
import { HomePage } from "../presentation/Pages/homePage"
import { Navbar } from "../presentation/layout/Navbar"
import { BubleSortComponent, InsertionSortComponent, QuickSortComponent, SelectionSortComponent } from "../components"


export const AppRouter = () => {
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/bubleSort" element={<BubleSortComponent/>}/>
                <Route path="/insertionSort" element={<InsertionSortComponent/>}/>
                <Route path="/selectionSort" element={<SelectionSortComponent/>}/>
                <Route path="/quickSort" element={<QuickSortComponent/>}/>
            </Routes>
        </div>
    )
}