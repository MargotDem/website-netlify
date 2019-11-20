import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Contents from "./contents"
import utils from "../lib/utils"

const HomePage = ({ contents }) => {
    const data = useStaticQuery(graphql`
        query HomePageQuery {
              markdownRemark(frontmatter: { title: { eq: "Home Page"}}) {
                      frontmatter {
                        title
                        contents {
                            content
                        }
                      }
                }
          }
    `)

    const pageContents = utils.extractContents(data, contents)

    return (<div>
       



        <Contents contents={pageContents} />
    </div>)
}

export default HomePage

// we wanna keep the order... fuck.
// ok so we take the names. for each name (map tho) we...search the contents table for an object whose title is the name?