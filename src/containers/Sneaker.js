import React, { useState } from "react";
import { deleteSneaker } from "../actions/index";
import { useDispatch } from "react-redux";
import EditSneakerForm from "./EditSneakerForm";
import "./Sneaker.css";
import { useSelector } from "react-redux";

function Sneaker(props) {
  const [isEditing, setIsEditing] = useState(false);
  const sneaker = useSelector(state => state.sneakerReducer);
  const dispatch = useDispatch();
  const sneakerIndex = sneaker.findIndex(
    sneaker => props.cellKey === sneaker.cellKey
  );

  const handleDeleteSneaker = () => {
    dispatch(deleteSneaker(sneaker[sneakerIndex].upcId));
    props.handleDeleteSneaker();
  };

  const handleEditSneaker = e => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="sneakerContainer">
      {isEditing ? (
        <EditSneakerForm
          sneaker={sneaker[sneakerIndex]}
          handleEditSneaker={handleEditSneaker}
        ></EditSneakerForm>
      ) : (
        <div className="sneaker">
          <p>Brand: {sneaker[sneakerIndex].brand}</p>
          <p>Style: {sneaker[sneakerIndex].style}</p>
          <p>Size: {sneaker[sneakerIndex].size}</p>
          <p>UPC ID: {sneaker[sneakerIndex].upcId}</p>
          <button onClick={handleEditSneaker}>Edit</button>
          <button onClick={handleDeleteSneaker}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Sneaker;
