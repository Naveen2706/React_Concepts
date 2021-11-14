import React, { Component } from "react";
import ReactLifeCycleChild from "./ReactLifeCycleChild"

class ReactLifeCycleA extends Component {
  //constr is the only place wher state can be set otherwise setState
  //super is for constacting base constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("lifecycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // used to change state based on props and state value
    console.log("lifecycle A derivedStateFromProps");
    return null; //retrn new state or null
  }
  //compdidmount method is mounted only once and is best for sideeffect like http req and ajax
  componentDidMount() {
    console.log("lifecycle A componentDidMount");
  }
  //renders method is always there in component
  render() {
    console.log("lifecycle A render");
    return (
      <div>
        <div>lifecycle A</div>
        <ReactLifeCycleChild/>
      </div>
    );
  }
}

export default ReactLifeCycleA;
