import React from "react";

const ImageAndText = ({ content }) => {
  return (
    <div className="container has-text-centered is-mobile">
      <div className="columns">
        <div className="column is-6">
          <img alt="" src={content.image} />
        </div>
        <div className="column is-6">{content.text}</div>
      </div>
    </div>
  );
};

export default ImageAndText;
