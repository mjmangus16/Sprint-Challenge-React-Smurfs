import React from "react";

const Smurf = props => {
  return (
    <div
      className="Smurf"
      style={{ border: "1px solid black", marginTop: 20, padding: "25px 0px" }}
    >
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>DELETE SMURF</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
