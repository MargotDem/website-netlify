import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import SimpleContent from "../components/contents/simpleContent";
import Text from "../components/contents/text";
import {
  ContentfulPageQueryResult,
  SimpleContentType,
  TextType
} from "../types/types";

const SimplePageTemplate = ({ data }: { data: ContentfulPageQueryResult }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  function displayContent(content: {
    simpleContent?: SimpleContentType;
    text?: TextType;
  }) {
    let contentType;
    for (const property in content) {
      //@ts-ignore
      if (content[property]) {
        contentType = property;
        break;
      }
    }
    switch (contentType) {
      case "simpleContent":
        return (
          <SimpleContent content={content[contentType] as SimpleContentType} />
        );
      case "text":
        return <Text content={content[contentType] as TextType} />;
      default:
        return <div>(unknown content type)</div>;
    }
  }

  return (
    <div className="column is-10 is-offset-1">
      <SEO data={markdownRemark.frontmatter.metaData} />
      {frontmatter.contents.map(({ contentTypesWidget }, i: number) => {
        return <div key={i}>{displayContent(contentTypesWidget)}</div>;
      })}
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
        contents {
          contentTypesWidget {
            simpleContent {
              description
              image {
                imagePath
                imageAlt
              }
              title
            }
            text {
              title
              text
            }
          }
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
