import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import { ContentfulPageQueryResult } from "../types/types";

const SimplePageTemplate = ({ data }: { data: ContentfulPageQueryResult }) => {
  const { markdownRemark } = data;
console.log(markdownRemark);
  return (
    <div className="column is-10 is-offset-1">
      <SEO data={markdownRemark.frontmatter.metaData} />
      WIP
    </div>
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
        title
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
