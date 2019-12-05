import React from "react";
import { TextType } from "../../types/types";

const Text = ({ content }: { content: TextType }) => {
  return (
    <div className="container has-text-centered text-content">
      <div className="columns">
        <div className="column is-8 is-offset-2">{content.text}</div>
      </div>
    </div>
  );
};

export default Text;
