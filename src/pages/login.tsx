/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import Helmet from "react-helmet";
import LoginPage from "../components/loginPage";
import withMainLayout from "../templates/mainLayout";
import config from "../../data/SiteConfig";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nosnippet, noodp"
        />
        <title>{"Login - " + config.siteTitle}</title>
      </Helmet>
      <LoginPage />
    </>
  );
};

const options = {
  header: {
    dontShowLogo: false,
    showLoginButton: false
  },
  footer: {
    showFooter: false
  }
};

export default withMainLayout(IndexPage, options);
