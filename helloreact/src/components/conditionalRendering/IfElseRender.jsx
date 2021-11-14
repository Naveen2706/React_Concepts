import React, { Component } from "react";

class IfElseRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };
  }

  render() {
    if (this.state.status) {
      return <div> status is true</div>;
    } else {
      return <div>status is false</div>;
    }
  }
}

export default IfElseRender;
