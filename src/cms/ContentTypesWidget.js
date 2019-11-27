import CMS from "netlify-cms-app";
import React, { Component } from "react";

export class ContentTypesWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "" };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value });
    this.props.onChange(undefined);
  }

  renderWidgetControl() {
    const ObjectControl = CMS.getWidget("object").control;
    let { selectValue } = this.state;

    let newMap;
    let i = 0;

    if (selectValue) {
      while (this.props.field.getIn(["fields", i]) != undefined) {
        if (this.props.field.getIn(["fields", i, "name"]) != selectValue) {
          newMap = this.props.field.deleteIn(["fields", i]);
        }
        i += 1;
      }
      return <ObjectControl {...this.props} field={newMap} />;
    }
    return <div>choose a content type</div>;
  }

  render() {
    let { selectValue } = this.state;

    return (
      <div>
        <select
          name="contentType"
          id="contentType"
          value={selectValue ? selectValue : ""}
          onChange={this.handleSelectChange}
        >
          <option value="">Choose...</option>
          <option value="simpleContent">simple content</option>
          <option value="text">Text</option>
        </select>
        {this.renderWidgetControl()}
      </div>
    );
  }
}

export class NewWidgetPreview extends Component {
  render() {
    return (
      <div>
        {/* the value is: {this.props.value} */}
        yo
      </div>
    );
  }
}
