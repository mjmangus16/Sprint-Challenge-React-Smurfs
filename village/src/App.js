import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Nav from "./components/Nav";

import axios from "axios";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs").then(res => {
      console.log(res);
      this.setState({ smurfs: res.data });
    });
  }

  addSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf).then(res => {
      this.setState({ smurfs: res.data });
      this.props.history.push("/");
    });
  };

  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
      this.setState({ smurfs: res.data });
    });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          exact
          path="/"
          render={() => (
            <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
