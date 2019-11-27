import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./footer";

const Index = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { title: { eq: "Footer" } }) {
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

  return <Footer footer={footer} />;
};

export default Index;
