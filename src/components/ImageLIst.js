import React from "react";

const ImageLIst = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageLIst;
