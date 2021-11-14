import React, { Component } from "react";
import ReactLifeCycleUChild from "./ReactLifeCycleUChild";

class ReactLifeCycleUA extends Component {
  //constr is the only place wher state can be set otherwise setState
  //super is for constacting base constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("lifecycle A constructor");
  }

  changeState = () => {
this.setState({
name:'codevolution'
})
  }

  static getDerivedStateFromProps(props, state) {
    // used to change state based on props and state value
    console.log("lifecycle A derivedStateFromProps");
    return null; //retrn new state or null
  }
  //compdidmount method is mounted only once and is best for sideeffect like http req and ajax
  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }


  //rarely used,dictates if all component should rerender
  //for performance optimization
  //return true or false
  shouldComponentUpdate() {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }

  //methods is called right before the changes from virtual dom are to be reflected in the dom
  //rare, return null or value, return value can be passed to componentDidUpdate method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("lifecycleA getSnapshotBeforeUpdate");
    return null
  }

  //run only once  in each rerender cycle, runs after three update lifecycle methods
  //suitable for sideeffects
  componentDidUpdate(){
      console.log('lifecycleA componentDidUpdate');
  }
  
  //renders method is always there in component
  render() {
    console.log("lifecycle A render");
    return (
      <div>
        <div>lifecycle A</div>
        <ReactLifeCycleUChild/>
        <button onClick = {this.changeState}>Change State</button>
      </div>
    );
  }
}

export default ReactLifeCycleUA;
