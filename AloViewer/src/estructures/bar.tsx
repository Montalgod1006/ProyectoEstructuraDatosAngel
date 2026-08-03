import React from "react";
import { motion } from "framer-motion";

interface BarProps {
  value: number;
  highlighted: boolean;
}

export const Bar: React.FC<BarProps> = ({ value, highlighted }) => (
  <div className="flex flex-col items-center">
    <span className="mb-1 font-bold">{value}</span>
    <motion.div
      animate={{
        height: value * 20,
        backgroundColor: highlighted ? "#ffb300" : "steelblue",
      }}
      transition={{ duration: 0.5 }}
      className="w-10 m-1"
    />
  </div>
);
