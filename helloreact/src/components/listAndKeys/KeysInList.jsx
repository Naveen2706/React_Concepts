import React from "react";
import Person2 from "./Person2";

function KeysInList() {
  const persons2 = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const personList = persons2.map(person => <Person2 key={person.id} person={person} />);    //unique key is used for react to increase efficiency and reduce mutation 
  return <div>{personList}</div>;
                                                                                        //1st approach without component for jsx
  // const list = ['bruce','clark','diana']
  // const nameList = list.map(name => <h2>{name}</h2>)                 //map is used if we have list of elements such that for each element same operation is performed 
  // return <div>{nameList}</div>
}
export default KeysInList;
