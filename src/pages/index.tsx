import React from "react";
import HomePageMain from "../components/homePage/homePageMain";
import SEO from "../components/SEO";
import withMainLayout from "../templates/mainLayout";

const IndexPage = props => {
  return (
    <>
      <SEO data={{}} />
      <HomePageMain />
    </>
  );
};

export default withMainLayout(IndexPage);
