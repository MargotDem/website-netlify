import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";

const SimplePageTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <SEO data={markdownRemark.frontmatter.metaData} />
      <section className="section">
        <div className="container">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { metaData: { path: { eq: $path } } }) {
      frontmatter {
        metaData {
          path
          title
          description
          image {
            imagePath
            imageAlt
          }
          openGraphType
          twitterCard
        }
      }
      html
    }
  }
`;

export default withMainLayout(SimplePageTemplate);
