import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
                                //in class use lifecycle methods
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {      //if only count changes update is printed-conditional update
      console.log("update document title");
      document.title = `clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count {this.state.count} times
        </button>
        <h2>{JSON.stringify(this.state.count)}</h2>
      </div>
    );
  }
}

export default ClassCounter;
