import React from "react";

const HelloN = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      { id: "helloN", className: "dummyClass" },
      "Hello Naveen"
    )
  );
};
export default HelloN;