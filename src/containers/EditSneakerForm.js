import React, { useState } from "react";
import { updateSneaker } from "../actions";
import { useDispatch } from "react-redux";
import "./EditSneakerForm.css";

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
    <div className="editFormContainer">
      <form className="editSneakerForm" onSubmit={handleSubmit}>
        <label>Brand:</label>
        <input {...newBrand} />
        <label>Style:</label>
        <input {...newStyle} />
        <label>Size:</label>
        <input {...newSize} />
        <label>UPC ID:</label>
        <input {...newUpcId} required />
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
