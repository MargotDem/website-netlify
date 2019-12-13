import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import { FeatureQueryResult } from "../types/types";

const SimplePageTemplate = ({ data }: { data: FeatureQueryResult }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div className="column is-10 is-offset-1">
      <SEO
        data={{
          ...frontmatter.metaData,
          title: frontmatter.title,
          path: frontmatter.path
        }}
      />
      WIP
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
        description
        image {
          imagePath
          imageAlt
        }
      }
    }
  }
`;

const options = {
  header: {
    dontShowLogo: false,
    showLoginButton: false
  },
  footer: {
    showFooter: true
  }
};

export default withMainLayout(SimplePageTemplate, options);
