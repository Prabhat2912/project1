import React from "react";

const RandomCard = ({ image, classname }) => {
  return (
    <div className={classname}>
      <img
        src={image.imageUrl}
        alt=""
        width={image.width}
        height={image.height}
        className="rounded-sm"
      />
    </div>
  );
};

export default RandomCard;
