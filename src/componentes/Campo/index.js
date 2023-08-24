import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const actualizarCambio = (event) => {
    props.actualizarValor(event.target.value);
  };

  const { type } = props;

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={actualizarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
