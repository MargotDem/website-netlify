import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./header";

const Index = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(frontmatter: { title: { eq: "Header" } }) {
        frontmatter {
          title
          sections {
            title
            linkPath
            links {
              linkName
              linkPath
            }
          }
        }
      }
    }
  `);

  const header = data.markdownRemark.frontmatter.sections;

  return <Header header={header} />;
};

export default Index;
