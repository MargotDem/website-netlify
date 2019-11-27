/* eslint-disable prettier/prettier */
import React from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";

const Index = ({ data: { title }}) => {
  return (
    <Helmet>
      {/* general */}

      <title>{title + " - " + config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
      <link rel="canonical" href={config.siteUrl} />

      {/* Schema.org */}

      {/* wip */}

      {/* OpenGraph */}

      <meta property="og:type" content="website" />
      {/* website par defaut, sauf si article, news, video.. */}
      <meta property="og:title" content="Nua.ge" />
      {/* title de la page */}
      <meta property="og:description" content="XXXX" />
      {/* description de la page */}
      <meta property="og:url" content="https://www.nua.ge/" />
      {/* url de la page */}
      <meta
        property="og:image"
        content="/images/nuage-social-share-image.png"
      />{" "}
      {/* pour la home une image custom (rectangle rouge 1200 X 630, pour les
        autres une image spécifique pour chaque contenu */}

      {/* Twitter Card */}

      <meta name="twitter:card" content="summary" />
      {/* summary par defaut, summary_large_image pour les autres articles, news.. */}
      <meta name="twitter:title" content="Nua.ge" />
      {/* title de la page */}
      <meta name="twitter:description" content="XXX" />
      {/* description de la page */}
      <meta name="twitter:url" content="https://www.nua.ge/" />
      {/* url de la page */}
      <meta name="twitter:image" content="/images/xxxxx.png" />
      {/* pour la home une image custom, pour les autres une image spécifique pour chaque contenu */}
    </Helmet>
  );
};

export default Index;
