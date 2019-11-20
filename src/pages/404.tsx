import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Global from "../templates/globalHelmet"

const AboutPage = () => (
  <Global>
    <Helmet>
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noodp" />
    </Helmet>
    <p>Error :(</p>
    <Link to="/">Go to home page</Link>
  </Global>
)

export default AboutPage
