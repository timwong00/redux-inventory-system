import React from "react";
import Cell from "./Cell";
import "./Grid.css";
import { useSelector } from "react-redux";

function Grid() {
  const sneaker = useSelector(state => state.sneaker);

  const sneakerGrid = [];
  const createGrid = num => {
    for (let i = 0; i < num; i++) {
      sneakerGrid.push(<Cell key={i} />);
    }
    return sneakerGrid;
  };

  createGrid(25);
  console.log(sneakerGrid);
  return <div className="grid">{sneakerGrid}</div>;
}

export default Grid;
