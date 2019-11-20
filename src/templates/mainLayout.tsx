import React from "react"
import Global from "./globalHelmet"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql, useStaticQuery } from "gatsby"

import "../styles/styles.scss"

export default function withMainLayout(WrappedComponent) {
    const Test = (props) => {
        const data = useStaticQuery(graphql`
        query ContentQuery {
            allMarkdownRemark(
                filter: { fields: {sourceName: { eq: "feature"}}}
              ) {
                edges {
                    node {
                        frontmatter {
                            title
                            image
                        }
                        html
                    }
                }
            }
        }
    `)
        const contents = data.allMarkdownRemark.edges.map(({ node: { frontmatter, html } }, i: number) => {
            return {...frontmatter, html}
        })

        return (
            <Global>
                <div className="mainLayout-container">
                    <Header />
                    <div style={{ height: "100px" }} />
                    <WrappedComponent contents={contents} {...props} />
                    <div style={{ height: "100px" }} />
                    <Footer />
                </div>
            </Global>
        )
    }
    return Test
}
