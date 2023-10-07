import React from "react";

const Price = (props) => {
  const { price, location } = props;

  if (price) {
    return (
      <span>$ {price} </span>
    );
  }

  const placeholderText =
    location !== "CABA" ? "Consultar por otras localidades" : "Consultar";
  
  return <p>{placeholderText}</p>;
};

export default Price;
