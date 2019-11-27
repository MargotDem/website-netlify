import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";

const SimplePageTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <SEO data={markdownRemark.frontmatter} />
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
      html
    }
  }
`;

export default withMainLayout(SimplePageTemplate);
