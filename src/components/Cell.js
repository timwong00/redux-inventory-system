import React, { useState, useEffect, useRef } from "react";
import "./Cell.css";
import SneakerForm from "../containers/SneakerForm";
import Sneaker from "../components/Sneaker";
import { useSelector } from "react-redux";

function Cell() {
  const [isAdding, setIsAdding] = useState(false);

  const handleIsAdding = () => {
    setIsAdding(!isAdding);
  };

  return (
    <div className="cell">
      {isAdding ? (
        <SneakerForm></SneakerForm>
      ) : (
        <p className="addSneakerBtn" onClick={handleIsAdding}>
          Add a Sneaker
        </p>
      )}
    </div>
  );
}

export default Cell;
