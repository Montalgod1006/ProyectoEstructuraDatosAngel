import React, {  useMemo, useState } from "react";
import { Visualizer } from "../estructures/Visualizer";

const initialArray = [5, 3, 8, 1, 2, 10,4, 20, 11];

//Las barritas animadas


//Aqui es para que se muevan las barras

//Esto es para ver la dificultad, va contar cuanto se tarda en completar el algoritmo tecnicamente
function contarInversiones(arr: number[]): number {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) contador++;
    }
  }
  return contador;
}

function calcularDificultad(arr: number[]) : {nivel: string; inversiones: number; maximo: number}{
  const inversiones = contarInversiones(arr);
  const n = arr.length;
  const maximo = (n* (n-1)) /2;
  const porcentaje = maximo === 0 ? 0 : inversiones / maximo;

  let nivel: string;
  if(porcentaje ===0) nivel = "Ya ordenado";
  else if (porcentaje < 0.33) nivel = "Ta easy";
  else if (porcentaje < 0.66) nivel = "Ta medio complicado";
  else nivel = "Esta heavy";

  return {nivel, inversiones, maximo}
}


export const BubleSortComponent: React.FC = () => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [sorting, setSorting] = useState(false);
  const [swapIndices, setSwapIndices] = useState<number[]>([]);
  const [nFact, setNFact] = useState(0);
  const [speedFact, setSpeedFact] = useState(100);
  const dificultad = useMemo(() => calcularDificultad(array), [array]);
  const [comparaciones, setComparaciones] = useState(0);
const [swapsRealizados, setSwapsRealizados] = useState(0);
// El bubble sort funcionando

  async function bubbleSort() {
    setSorting(true);
    setComparaciones(0);
    setSwapsRealizados(0);
    const copy = [...array];
    let totalComparaciones = 0;
    let totalSwaps = 0;

    for (let i = 0; i < copy.length; i++) { 
      for (let j = 0; j < copy.length - i - 1; j++) {
        totalComparaciones++;
        setComparaciones(totalComparaciones);

        if (copy[j] > copy[j + 1]) {
            setSwapIndices([j, j+1]);
          [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
          setArray([...copy]);
          totalSwaps++;
          setSwapsRealizados(totalSwaps);
          await new Promise((res) => setTimeout(res, speedFact)); 
          setSwapIndices([]);
        }
      }
    }
    setSorting(false);
  }

  //Esto crea otro array random por si no gusta el por defecto
  function resetArray() {
    setArray(Array.from({ length: 9 }, () => Math.floor(Math.random() * 20) + 1));
  }
  //La funcion para agregar mas cosas al array XD
  function addArray(){
    setArray([...array, nFact])
    setNFact(0)
  }
  //Ya el return funcionando
  return (
    <div className="text-center mt-10" >
      <Visualizer array={array} swapIndices={swapIndices} />
      <div className="mt-4">
          <p>
            <strong>Dificultad:</strong> {dificultad.nivel}{" "}
            <span className="text-white">
              ({dificultad.inversiones} de {dificultad.maximo} inversiones)
            </span>
          </p>
          <p className="text-white text-sm">
            Comparaciones: {comparaciones} · Swaps: {swapsRealizados}
          </p>
      </div>
      <div className="mt-4 space-x-2">
        <input type="number" 
              className="bg-white text-black border rounded px-2 py-1" 
              value={nFact} 
              min={0} 
              onChange={(e) => {
              setNFact(Number(e.target.value));
            }}/>

        <button onClick={addArray} style={{ marginLeft: "10px" }} disabled={sorting}>
          Agregar al Array
        </button>
          
        <strong>Velocidad</strong>
        <input type="number" className="bg-white text-black" 
              value={speedFact} 
              min={100} 
              onChange={(e) => {
              setSpeedFact(Number(e.target.value));
            }}/>
      </div>
      <div className="mt-6 space-x-2">
        <button onClick={bubbleSort} disabled={sorting}>
          {sorting ? "Ordenando..." : "Iniciar Bubble Sort"}
        </button>
        <button onClick={resetArray} style={{ marginLeft: "10px" }} disabled={sorting}>
          Nuevo Array
        </button>
      </div>
    </div>
  );
};