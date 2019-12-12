import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { HeaderQueryResult } from "../../types/types";

import Header from "./header";

export interface HeaderOptionsProps {
  dontShowLogo?: boolean;
  showLoginButton?: boolean;
}

const Index = (props: HeaderOptionsProps) => {
  const data: HeaderQueryResult = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(frontmatter: { name: { eq: "header" } }) {
        frontmatter {
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

  return (
    <Header
      header={header}
      dontShowLogo={props.dontShowLogo}
      showLoginButton={props.showLoginButton}
    />
  );
};

export default Index;
