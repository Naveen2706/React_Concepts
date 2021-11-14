import React, { Component } from "react";

class ReactLifeCycleChild extends Component {
  //constr is the only place wher state can be set otherwise setState
  //super is for constacting base constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("lifeCycle child constructor");
  }

  static getDerivedStateFromProps(props, state) {
    // used to return null or object of updated state based on props and state value
    console.log("lifeCycle child derivedStateFromProps");
    return null; //retrn new state or null
  }
  //compdidmount method is mounted only once and is best for sideeffect like http req and ajax
  componentDidMount() {
    console.log("lifeCycle child componentDidMount");
  }
  //renders method is always there in component
  render() {
    console.log("lifeCycle child render");
    return <div>lifeCycle child</div>;
  }
}

export default ReactLifeCycleChild;
