/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import Tabs from "./tabs";
import Images from "./images";

export interface SlidesState {
  activeTab: number;
}

class Slides extends React.Component<{}, SlidesState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeTab: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(activeTab: number) {
    this.setState({ activeTab: activeTab });
  }

  render() {
    let { activeTab } = this.state;
    return (
      <>
        <Tabs changeTab={this.changeTab} activeTab={activeTab} />
        <Images activeTab={activeTab} />
      </>
    );
  }
}

export default Slides;
