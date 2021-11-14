import React from "react";

const GreetFunction1 = ({ name, heroName }) => {                
  //destructured from props obj at parameter pass time
  return (
    <div>
      <h1>
        hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
export default GreetFunction1;

export function GreetFunction2(props) {             // destructuring outside return
  const { name, heroName } = props;                 //Destructuring way 2 of props obj
  return (
    <div>
      <h1>
        hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
}
