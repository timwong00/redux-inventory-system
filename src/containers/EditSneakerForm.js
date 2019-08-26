import React, { useState } from "react";
import Sneaker from "../components/Sneaker";
import { updateSneaker } from "../actions";
import { useDispatch } from "react-redux";

function EditSneakerForm(props) {
  const dispatch = useDispatch();
  const newBrand = useFormInput(props.sneaker.brand);
  const newStyle = useFormInput(props.sneaker.style);
  const newSize = useFormInput(props.sneaker.size);
  const newUpcId = useFormInput(props.sneaker.upcId);

  const newData = {
    newBrand: newBrand.value,
    newStyle: newStyle.value,
    newSize: newSize.value,
    newUpcId: newUpcId.value
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSneaker(newData, props.sneaker.upcId));
    props.handleEditSneaker();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input {...newBrand} />
        </label>
        <label>
          Style:
          <input {...newStyle} />
        </label>
        <label>
          Size:
          <input {...newSize} />
        </label>
        <label>
          UPC ID:
          <input {...newUpcId} />
        </label>
        <button>Update</button>
      </form>
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

export default EditSneakerForm;
