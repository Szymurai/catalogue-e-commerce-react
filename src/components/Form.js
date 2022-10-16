import React from "react";
import "./Form.css";

const Form = (props) => {
  const buttonTxt = "Wyszukaj część";
  return (
    <form onSubmit={props.submit}>
      <input
        placeholder="Wpisz SKU"
        type="text"
        value={props.value}
        onChange={props.change}
      />
      <button className="search">
        <strong>{buttonTxt.toUpperCase()}</strong>
      </button>
    </form>
  );
};

export default Form;
