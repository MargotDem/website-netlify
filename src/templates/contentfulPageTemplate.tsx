import React from "react";
import { graphql } from "gatsby";

import withMainLayout from "./mainLayout";
import SEO from "../components/SEO";
import SimpleContent from "../components/contents/simpleContent";
import Text from "../components/contents/text";

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
      default:
        return <div>(unknown content type)</div>;
    }
  }
  return (
    <div>
      <SEO data={markdownRemark.frontmatter} />
      {frontmatter.contents.map(({ newWidget }, i: number) => {
        return <div key={i}>{displayContent(newWidget)}</div>;
      })}
    </div>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        contents {
          newWidget {
            simpleContent {
              description
              image
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

export default withMainLayout(SimplePageTemplate);
