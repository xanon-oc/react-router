import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const SinglePost = ({ post }) => {
  const navigate = useNavigate();

  const { id, title, body } = post;
  const handleNavigation = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="post">
      <h5>ID : {id}</h5>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Post Details </button>
      </Link>
      <button onClick={handleNavigation}>With Button Handler</button>
    </div>
  );
};

export default SinglePost;
