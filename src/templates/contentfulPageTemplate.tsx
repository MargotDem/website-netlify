import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import SimpleContent from "../components/contents/simpleContent";
import Text from "../components/contents/text";
import ImageAndText from "../components/contents/imageAndText";

const SimplePageTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  function displayContent(content) {
    let contentType;
    for (const property in content) {
      if (content[property]) {
        contentType = property;
        break;
      }
    }
    switch (contentType) {
      case "simpleContent":
        return <SimpleContent content={content[contentType]} />;
      case "text":
        return <Text content={content[contentType]} />;
      case "imageAndText":
        return <ImageAndText content={content[contentType]} />
      default:
        return <div>(unknown content type)</div>;
    }
  }
  return (
    <div>
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
              image
              title
            }
            text {
              title
              text
            }
            imageAndText {
              image
              text
            }
          }
        }
      }
    }
  }
`;

export default withMainLayout(SimplePageTemplate);
