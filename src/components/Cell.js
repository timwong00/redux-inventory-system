import React, { useState } from "react";
import "./Cell.css";
import SneakerForm from "../containers/SneakerForm";

function Cell(props) {
  const [isAdding, setIsAdding] = useState(false);

  const handleIsAdding = () => {
    setIsAdding(!isAdding);
  };

  const handleDeleteSneaker = () => {
    setIsAdding(!isAdding);
  };

  return (
    <div className="cell">
      {isAdding ? (
        <SneakerForm
          handleDeleteSneaker={handleDeleteSneaker}
          cellKey={props.cellKey}
        ></SneakerForm>
      ) : (
        <p className="addSneakerBtn" onClick={handleIsAdding}>
          Add a Sneaker
        </p>
      )}
    </div>
  );
}

export default Cell;
