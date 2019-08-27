import React from "react";
import Cell from "./Cell";
import "./Grid.css";

function Grid() {
  const sneakerGrid = [];
  const createGrid = num => {
    for (let i = 0; i < num; i++) {
      sneakerGrid.push(<Cell key={i} cellKey={i} />);
    }
    return sneakerGrid;
  };
  createGrid(25);
  return <div className="grid">{sneakerGrid}</div>;
}

export default Grid;
