import React from "react"
import { graphql } from "gatsby"
import Contents from "../components/contents"
import utils from "../lib/utils"

import withMainLayout from "./mainLayout"

const SimplePageTemplate = ({ data, contents }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  // const pageContents = utils.extractContents(data, contents)
  return (
    <div>
      simple page template
      <br/>
      {frontmatter.title}
    </div>
      // <Contents contents={pageContents}/>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
    }
  }
`

export default withMainLayout(SimplePageTemplate)