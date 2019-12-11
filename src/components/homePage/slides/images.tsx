import React from "react";
import { SlidesState } from "./index";

const Images = (props: SlidesState) => {
  const src = "/images/slide-" + (props.activeTab + 1) + ".png";
  return (
    <div className="column is-8 functionalities-image">
      <img alt="" src={src} />
    </div>
  );
};

export default Images;
