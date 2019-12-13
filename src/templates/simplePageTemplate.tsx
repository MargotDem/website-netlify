import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import { SimplePageQueryResult } from "../types/types";

const SimplePageTemplate = ({ data }: { data: SimplePageQueryResult }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const title = frontmatter.title as string;
  return (
    <div className="column is-10 is-offset-1">
      <SEO
        data={{
          ...frontmatter.metaData,
          title: frontmatter.title,
          path: frontmatter.path
        }}
      />
      <section className="section simple-page">
        <div className="columns is-centered">
          <div className="column is-11">
            <h1>{title.toUpperCase()}</h1>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        metaData {
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
    showLoginButton: false
  },
  footer: {
    showFooter: false
  }
};

export default withMainLayout(SimplePageTemplate, options);
