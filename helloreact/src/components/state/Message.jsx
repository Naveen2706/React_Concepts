import React, { Component } from "react";

class Message extends Component {
  constructor() {                                               //constructor for initialisation of component
    super();                                                    //super keyword is for calling constructor 
    this.state = {                                             //initial state 
      Message: "Hello Visitor",
    };
  }

  changeMessage() {                                         //function to handle click event
    this.setState({                                            // state after event is fired                  
      Message: "Thanks For Subscribing",                        // //all the js code  will change once event is fired
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>                 
      </div>                                                                            
    );
  }
}
export default Message;
