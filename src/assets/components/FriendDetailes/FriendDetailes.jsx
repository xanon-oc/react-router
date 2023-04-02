import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetailes = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2>Everything about this person is here</h2>
      <h4>Name : {friend.name}</h4>
      <h4>Email : {friend.email}</h4>
      <h4>Phone : {friend.phone}</h4>
    </div>
  );
};

export default FriendDetailes;
