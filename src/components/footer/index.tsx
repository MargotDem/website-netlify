import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./footer";
import { FooterQueryResult } from "../../types/types";

export interface FooterOptionsProps {
  showFooter: boolean;
}

const Index = (props: FooterOptionsProps) => {
  const data: FooterQueryResult = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { name: { eq: "footer" } }) {
        frontmatter {
          sections {
            title
            links {
              linkName
              linkPath
            }
          }
        }
      }
    }
  `);

  const footer = data.markdownRemark.frontmatter.sections;

  return <Footer footer={footer} showFooter={props.showFooter} />;
};

export default Index;
