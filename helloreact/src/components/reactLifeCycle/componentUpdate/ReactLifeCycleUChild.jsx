import React, { Component } from "react";

class ReactLifeCycleUChild extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("lifeCycle child constructor");
  }

  static getDerivedStateFromProps(props, state) {
   
    console.log("lifeCycle child derivedStateFromProps");
    return null; 
  }

  componentDidMount() {
    console.log("lifeCycle child componentDidMount");
  }
  

  shouldComponentUpdate() {
    console.log("lifecycleChild shouldComponentUpdate");
    return true;
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycleChild getSnapshotBeforeUpdate");
    return null
  }

  componentDidUpdate() {
    console.log("lifecycleChild componentDidUpdate");
  }

  render() {
    console.log("lifeCycle child render");
    return <div>lifeCycle child</div>;
  }
}

export default ReactLifeCycleUChild;
