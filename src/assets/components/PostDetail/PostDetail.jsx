import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postData = useLoaderData();
  const { id, title, body, userId } = postData;
  const navigate = useNavigate();
  const handleGoBAck = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Detail about your post</h3>
      <h5>ID : {id}</h5>
      <p>{title}</p>
      <p>{body}</p>
      <p>{userId}</p>
      <button onClick={handleGoBAck}>Go Back</button>
    </div>
  );
};

export default PostDetail;
