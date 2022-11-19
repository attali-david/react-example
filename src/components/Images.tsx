import React from "react";
import "./stylesheet.css";

const Images = ({ url }) => {
  return (
    <div className="images">
      <img src={url} alt={url} />
    </div>
  );
};

export default Images;
