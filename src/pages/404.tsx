import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Global from "../templates/globalHelmet";
import config from "../../data/SiteConfig";

const AboutPage = () => (
  <Global>
    <Helmet>
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noodp"
      />
      <title>{"Erreur 404 - " + config.siteTitle}</title>
    </Helmet>
    <div className="error-page">
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">404</h1>
            <h2 className="subtitle">
              <strong>Something’s missing</strong>
            </h2>
            <div>
              This page is missing or you assembled the link incorrectly.
            </div>
            <Link to="/">Go to website</Link>
          </div>
        </div>
      </section>
    </div>
  </Global>
);

export default AboutPage;
