import React from "react";
import Cell from "./Cell";
import "./Grid.css";
import { useSelector } from "react-redux";

function Grid() {
  const sneaker = useSelector(state => state.sneaker);

  const sneakerGrid = [];
  const grid25 = () => {
    for (let i = 0; i < 25; i++) {
      sneakerGrid.push(<Cell key={i} />);
    }
    return sneakerGrid;
  };

  grid25();
  console.log(sneakerGrid);
  return <div className="grid">{sneakerGrid}</div>;
}

export default Grid;
