import React, { Component } from "react";

class ClasspropsN extends Component{
render(){
  return ( 
  <div><h1>Welcome {this.props.name}</h1>
  {this.props.children}
  </div>
  )
}
}
export default ClasspropsN