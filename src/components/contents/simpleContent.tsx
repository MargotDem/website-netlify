/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";
import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

class SimpleContent extends Component {
  constructor(props) {
    super(props);
    this.state = { imagePath: null };
  }

  componentDidMount() {
    let {
      content: {
        image: { imagePath }
      }
    } = this.props;
    import(`../../../static${imagePath}`).then(result => {
      this.setState({ imagePath: result.default });
    });
  }

  render() {
    let { content } = this.props;
    let { image: { imageAlt }} = content;
    let { imagePath } = this.state;

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
            <img
              alt={imageAlt}
              src={imagePath}
              className="simple-content-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleContent;
