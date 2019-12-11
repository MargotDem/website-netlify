import React from "react";
import HomePage from "../components/homePage";
import SEO from "../components/SEO";
import withMainLayout from "../templates/mainLayout";

const IndexPage = () => {
  return (
    <>
      <SEO data={{}} />
      <HomePage />
    </>
  );
};

const options = {
  header: {
    dontShowLogo: true,
    showLoginButton: true
  },
  footer: {
    showFooter: true
  }
};

export default withMainLayout(IndexPage, options);
