import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Global from "../templates/globalHelmet";
import Header from "../components/header";
import config from "../../data/SiteConfig";

import "../styles/styles.scss";

const ErrorPage = () => (
  <Global>
    <Helmet>
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noodp"
      />
      <title>{"Erreur 404 - " + config.siteTitle}</title>
    </Helmet>
    <div className="error-page">
      <Header dontShowLogo={false} showLoginButton={false} />
      <div className="error-page-content-container">
        <div className="error-page-content">
          <div className="error-title">
            <strong>404</strong>
          </div>

          <div className="error-text ">
            <div className="is-h3">
              <strong>Oups !</strong>
            </div>
            <div>La page que vous recherchez semble introuvable.</div>
          </div>

          <Link to="/">Retour à l’accueil du site</Link>
        </div>
      </div>
    </div>
  </Global>
);

export default ErrorPage;
