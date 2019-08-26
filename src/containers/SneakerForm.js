import React, { useState } from "react";
import Sneaker from "../components/Sneaker";
import { addSneaker } from "../actions";
import { useDispatch } from "react-redux";

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
    <div>
      {hasSneakerData ? (
        <Sneaker
          key={data.upcId}
          sneaker={data}
          handleDeleteSneaker={handleDeleteSneaker}
        ></Sneaker>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Brand:
            <input {...brand} />
          </label>
          <label>
            Style:
            <input {...style} />
          </label>
          <label>
            Size:
            <input {...size} />
          </label>
          <label>
            UPC ID:
            <input {...upcId} />
          </label>
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
