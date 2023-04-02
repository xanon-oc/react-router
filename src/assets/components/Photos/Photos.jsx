import React from "react";
import SinglePhotos from "../SinglePhotos/SinglePhotos";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const Photos = () => {
  const photos = useLoaderData();
  return (
    <div>
      {photos.map((photo) => (
        <SinglePhotos key={photo.id} photo={photo}></SinglePhotos>
      ))}
    </div>
  );
};

export default Photos;
