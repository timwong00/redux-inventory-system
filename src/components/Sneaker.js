import React, { useState } from "react";
import { deleteSneaker } from "../actions/index";
import { useDispatch } from "react-redux";
import EditSneakerForm from "../containers/EditSneakerForm";
import "./Sneaker.css";
import { useSelector } from "react-redux";

function Sneaker(props) {
  const [isEditing, setIsEditing] = useState(false);
  const sneakers = useSelector(state => state.sneakerReducer);
  const dispatch = useDispatch();

  const handleDeleteSneaker = e => {
    dispatch(deleteSneaker(props.sneaker.upcId));
    props.handleDeleteSneaker();
  };

  const handleEditSneaker = e => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="sneakerContainer">
      {isEditing ? (
        <EditSneakerForm
          sneaker={props.sneaker}
          handleEditSneaker={handleEditSneaker}
        ></EditSneakerForm>
      ) : (
        <div className="sneaker">
          <p>Brand: {props.sneaker.brand}</p>
          <p>Style: {props.sneaker.style}</p>
          <p>Size: {props.sneaker.size}</p>
          <p>UPC ID: {props.sneaker.upcId}</p>
          <button onClick={handleEditSneaker}>Edit</button>
          <button onClick={handleDeleteSneaker}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Sneaker;
