import React, { Component } from "react";
import moment from "moment";

export class HiddenDateControl extends Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
  }

  setDate() {
    const date = moment().format("YYYY-MM-DD");
    this.props.onChange(date);
  }

  render() {
    return <div>{this.setDate()}</div>;
  }
}
