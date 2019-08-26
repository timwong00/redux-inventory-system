import React from "react";

function Sneaker(props) {
  console.log(props);
  return (
    <div>
      <p>Brand: {props.sneaker.brand}</p>
      <p>Style: {props.sneaker.style}</p>
      <p>Size: {props.sneaker.size}</p>
      <p>UPC ID: {props.sneaker.upcId}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Sneaker;
