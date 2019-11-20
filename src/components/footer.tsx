import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

function isExternalLink(link: string) {
  return link.substring(0, 4) == "http"
}

const Footer = () => {
  const data = useStaticQuery(graphql`
        query FooterQuery {
              markdownRemark(frontmatter: { title: { eq: "Footer"}}) {
                      frontmatter {
                        sections {
                          title
                          links {
                            linkName
                            linkPath
                          }
                        }
                      }
                }
          }
    `)

  const footer = data.markdownRemark.frontmatter.sections

  return (
    <footer class="footer">
      <div class="container">
        <div class="columns">
          {footer.map((section, i: number) => {
            return (<div class="column is-3" key={i}>
              <h2><strong>{section.title}</strong></h2>
              <ul>
                {
                  section.links.map((link, j: number) => {
                    if (isExternalLink(link.linkPath)) {
                      return <li key={j}>
                        <a target="_blank" href={link.linkPath} rel="noopener noreferrer">{link.linkName}</a>
                      </li>
                    }
                    return <li key={j}>
                      <Link to={link.linkPath} >{link.linkName}</Link>
                    </li>
                  })
                }
              </ul>
            </div>)


            // return (<div key={i}>
            //   <h4>{section.title}</h4>
            //   <ul>
            //     {
            //       section.links.map((link, j: number) => {
            //         if (isExternalLink(link.linkPath)) {
            //           return <li key={j}>
            //             <a target="_blank" href={link.linkPath} rel="noopener noreferrer">{link.linkName}</a>
            //           </li>
            //         }
            //         return <li key={j}>
            //           <Link to={link.linkPath} >{link.linkName}</Link>
            //         </li>
            //       })
            //     }
            //   </ul>
            // </div>)



          })}
        </div>

      </div>
      <script src="../js/bulma.js"></script>
    </footer>
  )
}

export default Footer

{/* <div>
{footer.map((section, i: number) => {
  return (<div key={i}>
    <h4>{section.title}</h4>
    <ul>
      {
        section.links.map((link, j: number) => {
          if (isExternalLink(link.linkPath)) {
            return <li key={j}>
              <a target="_blank" href={link.linkPath} rel="noopener noreferrer">{link.linkName}</a>
            </li>
          }
          return <li key={j}>
            <Link to={link.linkPath} >{link.linkName}</Link>
          </li>
        })
      }
    </ul>
  </div>)
})}
</div> */}