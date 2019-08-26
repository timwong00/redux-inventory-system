import React from "react";
import { deleteSneaker } from "../actions/index";
import { useDispatch } from "react-redux";

function Sneaker(props) {
  const dispatch = useDispatch();
  const handleEditSneaker = () => {
    console.log(props);
  };

  const handleDeleteSneaker = () => {
    console.log(props.sneaker.upcId);
    dispatch(deleteSneaker(props.sneaker.upcId));
  };
  return (
    <div>
      <p>Brand: {props.sneaker.brand}</p>
      <p>Style: {props.sneaker.style}</p>
      <p>Size: {props.sneaker.size}</p>
      <p>UPC ID: {props.sneaker.upcId}</p>
      <button onClick={handleEditSneaker}>Edit</button>
      <button onClick={handleDeleteSneaker}>Delete</button>
    </div>
  );
}

export default Sneaker;
