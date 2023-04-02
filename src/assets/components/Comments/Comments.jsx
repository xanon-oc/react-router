import React from "react";
import "./Comments.css";
import { useLoaderData } from "react-router-dom";
import SingleComment from "../SingleComment/SingleComment";
const Comments = () => {
  const comments = useLoaderData();
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment}></SingleComment>
      ))}
    </div>
  );
};

export default Comments;
