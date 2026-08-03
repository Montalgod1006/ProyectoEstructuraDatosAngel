import type React from "react";
import { Bar } from "./bar";


interface VisualizerProps{
    array: number[],
    swapIndices: number[]
}

export const Visualizer: React.FC<VisualizerProps> = ({ array, swapIndices }) => (
  <div className="flex items-end">
    {array.map((val, i) => (
      <Bar key={i} value={val} highlighted={swapIndices.includes(i)} /> 
    ))}
  </div>
);