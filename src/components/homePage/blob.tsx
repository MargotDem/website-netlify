/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import createBlob from "./blobScript";

const blobJs =
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js";

class Blob extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  renderBlob() {
    createBlob({
      element: document.querySelector("#blob-path"),
      numPoints: 5,
      centerX: 500,
      centerY: 500,
      minRadius: 230,
      maxRadius: 300,
      minDuration: 2,
      maxDuration: 5
    });
  }

  componentDidMount() {
    let script = document.createElement("script");
    script.src = blobJs;
    script.onload = () => {
      this.renderBlob();
    };
    document.head.appendChild(script);
  }

  render() {
    return (
      <svg id="blob-svg" viewBox="0 0 1000 1000">
        <path id="blob-path"></path>
      </svg>
    );
  }
}

export default Blob;
