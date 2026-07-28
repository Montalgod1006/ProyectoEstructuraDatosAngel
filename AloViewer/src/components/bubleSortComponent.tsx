import React, { useState } from "react";
import { motion } from "framer-motion";

const initialArray = [5, 3, 8, 1, 2, 10,4, 20, 11];

const Bar: React.FC<{ value: number; highlighted: boolean }> = ({ value, highlighted }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {/* Número arriba */}
    <span style={{ marginBottom: "4px", fontWeight: "bold" }}>{value}</span>
    {/* Barra animada */}
    <motion.div
      animate={{ height: value * 20, 
        backgroundColor: highlighted ? "#ffb300" : "steelblue" }}
      transition={{ duration: 0.5 }}
      style={{
        width: "40px",
        margin: "4px"
      }}
    />
  </div>
);

const Visualizer: React.FC<{ array: number[]; swapIndices: number[] }> = ({ array, swapIndices }) => (
  <div style={{ display: "flex", alignItems: "flex-end" }}>
    {array.map((val, i) => (
      <Bar key={i} value={val} highlighted={swapIndices.includes(i)} /> 
    ))}
  </div>
);

export const BubleSortComponent: React.FC = () => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [sorting, setSorting] = useState(false);
  const [swapIndices, setSwapIndices] = useState<number[]>([]);
  const [nFact, setNFact] = useState(0);
  const [speedFact, setSpeedFact] = useState(100);

  async function bubbleSort() {
    setSorting(true);
    const copy = [...array];
    for (let i = 0; i < copy.length; i++) { 
      for (let j = 0; j < copy.length - i - 1; j++) {
        if (copy[j] > copy[j + 1]) {
            setSwapIndices([j, j+1]);
          [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
          setArray([...copy]);
          await new Promise((res) => setTimeout(res, speedFact)); 
          setSwapIndices([]);
        }
      }
    }
    setSorting(false);
  }

  function resetArray() {
    setArray(Array.from({ length: 9 }, () => Math.floor(Math.random() * 20) + 1));
  }
  function addArray(){
    setArray([...array, nFact])
    setNFact(0)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }} className="justify-center">
      <Visualizer array={array} swapIndices={swapIndices} />
      <div>
        <input type="number" className="bg-white text-black" 
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
      <div style={{ marginTop: "20px" }}>
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