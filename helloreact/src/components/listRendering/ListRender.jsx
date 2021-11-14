import React from "react";
import Person from "./Person";

function ListRender() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 1,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 1,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const personList = persons.map((person) => <Person person={person} />);    //props are sent to child component which is jsx part to print
  return <div>{personList}</div>;
                                                                                        //1st approach without component for jsx
  // const list = ['bruce','clark','diana']
  // const nameList = list.map(name => <h2>{name}</h2>)                 //map is used if we have list of elements such that for each element same operation is performed 
  // return <div>{nameList}</div>
}
export default ListRender;
