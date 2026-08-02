import './homePage.css'
import { Link } from 'react-router'

export const HomePage = () => {
  

  return (
    <div>
      <h1>AloViewer</h1>
      <div className='text-center columns-3'>
        <Link to={"/bubleSort"}>
            <img src={"/public/pwa-512x512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
            <span className=" text-blue-500">Buble Sort</span>
        </Link>
        <Link to={"/insertionSort"}>
            <img src={"/public/pwa-512x512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
            <span className=" text-blue-500">Insertion Sort</span>
        </Link>
        <Link to={"/selectionSort"}>
            <img src={"/public/pwa-512x512.png"} className="logo w-40 h-40 center mx-auto" alt="AloViewer logo"  /> 
            <span className=" text-blue-500">selection Sort</span>
        </Link>
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
