import React from "react";
import "./SingleComment.css";
import { Link } from "react-router-dom";
const SingleComment = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <div className="comment">
      <h1>{name}</h1>
      <h2>{email}</h2>

      <Link to={`/comment/${comment.id}`}>Comment Details</Link>
    </div>
  );
};

export default SingleComment;
