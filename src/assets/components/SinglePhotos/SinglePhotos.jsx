import React from "react";
import "./SinglePhotos.css";
import { Link } from "react-router-dom";
const SinglePhotos = ({ photo }) => {
  const { id, url, title } = photo;
  return (
    <div className="photo">
      <div>
        <h2>ID : {id}</h2>
        <img src={url} alt="" />
      </div>
      <div>
        <Link to={`/photo/${photo.id}`}>Show Details</Link>
        <button>Show more photos</button>
      </div>
    </div>
  );
};

export default SinglePhotos;
