import React from "react";

function Person2({person}) {
  return (
    <div>
      <h2>
        Hello my name is {person.name} I am {person.age} years old, I am trained            {/* jsx component for print and child component of List Render*/ }
        in {person.skill}
      </h2>
    </div>
  );
}

export default Person2;
