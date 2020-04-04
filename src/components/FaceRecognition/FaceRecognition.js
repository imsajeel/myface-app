import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      {console.log("This is source image " + imageUrl)}
      <img alt="" src={imageUrl} />
    </div>
  );
};

export default FaceRecognition;
