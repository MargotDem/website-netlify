/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";
import { MetaData } from "../../types/types";

interface SEOProps {
  data: MetaData;
}

const Index = (props: SEOProps) => {
  let {
    data: { title, path, description, image, openGraphType, twitterCard }
  } = props;

  const pageTitle = title ? title : config.siteTitle;
  const pageDescription = description ? description : config.siteDescription;
  const pageUrl = path ? config.siteUrl + path : config.siteUrl;
  const pageImagePath = image
    ? config.siteUrl + image.imagePath
    : config.siteUrl + config.siteDefaultImage;

  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: pageUrl,
    name: pageTitle,
    publisher: {
      "@type": "Organization",
      name: config.siteTitle,
      logo: config.siteUrl + config.siteLogo
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },
    description: pageDescription
  };

  return (
    <Helmet>
      {/* general */}

      <title>
        {title
          ? title + " - " + config.siteTitle
          : config.siteTitle + " - Services Cloud"}
      </title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {/* wip */}

      {/* OpenGraph */}

      <meta
        property="og:type"
        content={openGraphType ? openGraphType : "website"}
      />
      {/* website par defaut, sauf si article, news, video.. */}
      <meta property="og:title" content={pageTitle} />
      {/* title de la page */}
      <meta property="og:description" content={pageDescription} />
      {/* description de la page */}
      <meta property="og:url" content={pageUrl} />
      {/* url de la page */}
      <meta property="og:image" content={pageImagePath} />
      <meta
        property="og:image:alt"
        content={image ? image.imageAlt : config.siteDefaultImageAlt}
      />
      {/* pour la home une image custom (rectangle rouge 1200 X 630, pour les
              autres une image spécifique pour chaque contenu */}

      {/* Twitter Card */}

      <meta
        name="twitter:card"
        content={twitterCard ? twitterCard : "summary"}
      />
      {/* summary par defaut, summary_large_image pour les autres articles, news.. */}
      <meta name="twitter:title" content={pageTitle} />
      {/* title de la page */}
      <meta name="twitter:description" content={pageDescription} />
      {/* description de la page */}
      <meta name="twitter:url" content={pageUrl} />
      {/* url de la page */}
      <meta name="twitter:image" content={pageImagePath} />
      {/* pour la home une image custom, pour les autres une image spécifique pour chaque contenu */}
    </Helmet>
  );
};

export default Index;
