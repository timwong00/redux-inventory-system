import React, { useState } from "react";
import Sneaker from "../components/Sneaker";

function SneakerForm() {
  const [hasSneakerData, setSneakerData] = useState(false);
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
    console.log(data);
    setSneakerData(!hasSneakerData);
  };

  return (
    <div>
      {hasSneakerData ? (
        <Sneaker
          key={data.upcId}
          sneakerKey={data.upcId}
          sneaker={data}
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
