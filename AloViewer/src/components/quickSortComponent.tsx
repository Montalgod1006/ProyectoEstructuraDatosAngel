import React, {  useMemo, useState } from "react";
import { Visualizer } from "../estructures/Visualizer";

const initialArray = [5, 3, 8, 1, 2, 10,4, 20, 11];


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


export const QuickSortComponent: React.FC = () => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [sorting, setSorting] = useState(false);
  const [swapIndices, setSwapIndices] = useState<number[]>([]);
  const [nFact, setNFact] = useState(0);
  const [speedFact, setSpeedFact] = useState(600);
  const dificultad = useMemo(() => calcularDificultad(array), [array]);
  const [comparaciones, setComparaciones] = useState(0);
const [swapsRealizados, setSwapsRealizados] = useState(0);
// El bubble sort funcionando

  async function quickSort() {
    setSorting(true);
    setComparaciones(0);
    setSwapsRealizados(0);
    const copy = [...array];
    let totalComparaciones = 0;
    let totalSwaps = 0;

    async function intercambiar(a: number, b: number){
        setSwapIndices([a,b]);
        [copy[a], copy[b]] = [copy[b], copy[a]];
        setArray([...copy]);
        totalSwaps++;
        setSwapsRealizados(totalSwaps);
        await new Promise((res)=> setTimeout(res, speedFact));
        setSwapIndices([]);
    }

    async function partition(low: number, high: number): Promise<number>{
        const pivote = copy[high];
        let i = low -1;

        for (let j = low; j < high; j++) {
            totalComparaciones++;
            setComparaciones(totalComparaciones);

            if (copy[j]< pivote) {
                i++;
                if (i !== j) {
                    await intercambiar(i,j);
                }
            }
        }
        if (i+1 !== high) {
            await intercambiar(i+1, high)
        }
        return i + 1;
    }

    async function quickSortHelper(low: number, high: number){
        if (low < high) {
            const posicionPivote = await partition(low, high);
            // Todos estos await es para el seguimiento de las animaciones
            await quickSortHelper(low, posicionPivote-1)
            await quickSortHelper(posicionPivote +1, high);
        }
    }
    await quickSortHelper(0, copy.length -1);
    setSorting(false);
  }

  
  function resetArray() {
    setArray(Array.from({ length: 9 }, () => Math.floor(Math.random() * 20) + 1));
  }
  function clearArray() {
  setArray([]); 
  }

  function addArray(){
    setArray([...array, nFact])
    setNFact(0)
  }
  //Ya el return funcionando
  return (
    <div className="text-center mt-10" >
        <strong className="text-2xl">QUICK SORT</strong>
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
        <button onClick={clearArray} style={{ marginLeft: "10px" }} disabled={sorting}>
          Vaciar el Array
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
        <button onClick={quickSort} disabled={sorting}>
          {sorting ? "Ordenando..." : "Iniciar Quick Sort"}
        </button>
        <button onClick={resetArray} style={{ marginLeft: "10px" }} disabled={sorting}>
          Nuevo Array
        </button>
      </div>
    </div>
  );
};