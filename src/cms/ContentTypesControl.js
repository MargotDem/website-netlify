import CMS from "netlify-cms-app";
import React, { Component } from "react";

export class ContentTypesControl extends Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "" };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  componentDidMount() {
    let content = this.props.value;
    if (content) {
      let value = content.keys().next().value;
      this.setState({ selectValue: value });
    }
  }

  renderWidgetControl() {
    const ObjectControl = CMS.getWidget("object").control;
    let { selectValue } = this.state;

    let newMap = this.props.field;

    if (selectValue != "") {
      while ([...newMap.get("fields").values()].length > 1) {
        if (newMap.getIn(["fields", 0, "name"]) !== selectValue) {
          newMap = newMap.deleteIn(["fields", 0]);
        } else {
          newMap = newMap.deleteIn(["fields", 1]);
        }
      }

      return <ObjectControl {...this.props} field={newMap} />;
    }

    return <div>choose a content type</div>;
  }

  render() {
    let { selectValue } = this.state;
    let { value } = this.props;

    return (
      <div>
        {!value && (
          <select
            name="contentType"
            id="contentType"
            value={selectValue ? selectValue : ""}
            onChange={this.handleSelectChange}
          >
            <option value="">Choose...</option>
            <option value="simpleContent">Simple content</option>
            <option value="text">Text</option>
            <option value="imageAndText">Image and text</option>
          </select>
        )}
        {this.renderWidgetControl()}
      </div>
    );
  }
}
