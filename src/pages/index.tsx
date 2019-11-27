import React from "react";
import HomePageMain from "../components/homePage/homePageMain";

import withMainLayout from "../templates/mainLayout";

const IndexPage = props => {
  return (
    <>
      <HomePageMain />
    </>
  );
};

export default withMainLayout(IndexPage);
