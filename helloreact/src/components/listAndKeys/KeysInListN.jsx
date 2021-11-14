import React from "react";
import Friends2 from "./Friends2";

function KeysInListN() {
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

  const friendList = friends.map((friend) => <Friends2 key={friend.name} friend={friend} />);
  return <div>{friendList}</div>;
}

export default KeysInListN;
