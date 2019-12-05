import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import { SimplePageQueryResult } from "../types/types";

const SimplePageTemplate = ({ data }: { data: SimplePageQueryResult }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <>
      <SEO data={markdownRemark.frontmatter.metaData} />
      <section className="section simple-page">
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

const options = {
  header: {
    dontShowLogo: false,
    showLoginButton: true
  },
  footer: {
    showFooter: false
  }
};

export default withMainLayout(SimplePageTemplate, options);
