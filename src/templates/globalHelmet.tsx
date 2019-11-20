import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Global = (props) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata
  return (
    <>
        <Helmet>
          <html lang="fr" />
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="icon.png" type="image/png" />
          <link rel="canonical" href="https://www.nua.ge/" />
          <meta name="referrer" content="no-referrer-when-downgrade" />

          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="Nua.ge" />
          <meta name="twitter:site" content="@nuageXXXXX" />

          <title>{siteMetadata.title}</title>
          <meta name="description" content={siteMetadata.description} />



        </Helmet>
        {props.children}
      </>
  )
}

export default Global

// // Contextuel à la page
// <meta property="og:type" content="website" /> //website par defaut, sauf si article, news, video..
// <meta property="og:title" content="Nua.ge" /> //title de la page
// <meta property="og:description" content="XXXX" /> //description de la page
// <meta property="og:url" content="https://www.nua.ge/" /> //url de la page
// <meta property="og:image" content="xxxxx.png" /> //pour la home une image custom, pour les autres une image spécifique pour chaque contenu
// // si c'est un article, une news... y aura des trucs en plus

// <meta name="twitter:card" content="summary" /> //summary par defaut, summary_large_image pour les autres articles, news..
// <meta name="twitter:title" content="Nua.ge" /> //title de la page
// <meta name="twitter:description" content="XXX" /> //description de la page
// <meta name="twitter:url" content="https://www.nua.ge/" /> //url de la page
// <meta name="twitter:image" content="XXXXXX@2x.png"> //pour la home une image custom, pour les autres une image spécifique pour chaque contenu
