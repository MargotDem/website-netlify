import React from "react";
import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

const SimpleContent = ({ content }) => {
  return (
    <div className="container has-text-centered simple-content">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <h1 className="subtitle">{content.title}</h1>
          <div className="simple-content-description">
            {
              unified()
                .use(parse)
                .use(remark2react)
                .processSync(content.description).contents
            }
          </div>
          <img alt="" src={content.image} className="simple-content-image" />
        </div>
      </div>
    </div>
  );
};

export default SimpleContent;
