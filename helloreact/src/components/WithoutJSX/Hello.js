import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", 
    {id:'hello', className:'dummy' }, "hello Vishwas")    // without jsx code ->jsx calls createElement indirectly so need React import.
  );
};
export default Hello;