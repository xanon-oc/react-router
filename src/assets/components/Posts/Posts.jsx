import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2>All Post Are Here : {posts.length}</h2>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post}></SinglePost>
      ))}
    </div>
  );
};

export default Posts;
