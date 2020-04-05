import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="ma">
      <div className="absolute center mt2">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
