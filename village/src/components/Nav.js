import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    cursor: "pointer",
    width: "100%"
  }
};

const Nav = () => {
  return (
    <div style={styles.container}>
      <NavLink to="/">
        <p style={styles.button}>HOME</p>
      </NavLink>

      <NavLink to="/smurf-form">
        <p style={styles.button}>ADD SMURF</p>
      </NavLink>
    </div>
  );
};

export default Nav;
