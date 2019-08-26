import React, { useState } from "react";
import Sneaker from "../components/Sneaker";
import { addSneaker } from "../actions";
import { useDispatch } from "react-redux";
import "./SneakerForm.css";

function SneakerForm(props) {
  const [hasSneakerData, setSneakerData] = useState(false);
  const dispatch = useDispatch();
  const brand = useFormInput("");
  const style = useFormInput("");
  const size = useFormInput("");
  const upcId = useFormInput("");

  const data = {
    brand: brand.value,
    style: style.value,
    size: size.value,
    upcId: upcId.value
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSneaker(data));
    setSneakerData(!hasSneakerData);
  };

  const handleDeleteSneaker = () => {
    setSneakerData(!hasSneakerData);
    props.handleDeleteSneaker();
  };

  return (
    <div className="sneakerCell">
      {hasSneakerData ? (
        <Sneaker
          key={data.upcId}
          sneaker={data}
          handleDeleteSneaker={handleDeleteSneaker}
        ></Sneaker>
      ) : (
        <form className="sneakerForm" onSubmit={handleSubmit}>
          <label>Brand:</label>
          <input {...brand} />
          <label>Style:</label>
          <input {...style} />
          <label>Size:</label>
          <input {...size} />
          <label>UPC ID:</label>
          <input {...upcId} />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
};

export default SneakerForm;
