import React from "react";
import "./styles.css"

const Div = (props) => {
  return <p className={`renderizador ${props.click ? "active " : ""}`}>Soy un estado</p>;
};

export default Div;
