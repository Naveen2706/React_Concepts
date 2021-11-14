import React from "react";
import Friends from "./Friends";

function ListRenderN() {
  const friends = [
    {
      name: "Pratik",
      age: 27,
      city: "Jalgaon",
    },
    {
      name: "Abhishek",
      age: 24,
      city: "Ratnagiri",
    },
    {
      name: "Naveen",
      age: 25,
      city: "Pune",
    },
  ];

  const friendList = friends.map((friend) => <Friends friend={friend} />);
  return <div>{friendList}</div>;
}

export default ListRenderN;
