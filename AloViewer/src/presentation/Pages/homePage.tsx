import './homePage.css'
import { Link } from 'react-router'

export const HomePage = () => {
  

  return (
    <div>
      <div className='text-center columns-2'>
        <div>
            <Link to={"/bubleSort"}>
            <img src={"/bubleSortIcon_512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
            <span className=" text-white">Buble Sort</span>
        </Link>
        </div>
        <div>
          <Link to={"/insertionSort"}>
              <img src={"/InsertionSortIcon_512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
              <span className=" text-white">Insertion Sort</span>
          </Link>
        </div>
        <div>
        <Link to={"/selectionSort"}>
            <img src={"/selectionSortIcon_512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
            <span className=" text-white">Selection Sort</span>
        </Link>
        </div>
        <div>
        <Link to={"/quickSort"}>
            <img src={"/QuickSortIcon_512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
            <span className=" text-white">Quick Sort</span>
        </Link>
        </div>
        
      </div>
      <div className="card text-center">
        <p>
          {/* Aqui va algun texto */}
        </p>
      </div>
      <p className="read-the-docs">
          {/* Aqui va algun texto */}
      </p>
    </div>
  )
}
