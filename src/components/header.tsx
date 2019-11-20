import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
        markdownRemark(frontmatter: { title: { eq: "Header"}}) {
                frontmatter {
                  title
                  sections {
                    title
                    linkPath
                    links {
                      linkName
                      linkPath
                    }
                  }
                }
          }
    }
`)

  const header = data.markdownRemark.frontmatter.sections


  return (<nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        
        <a class="navbar-item" href="../">
          <img src="/icon.png" alt="Logo" />
        </a>
       
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      
      </div>
      
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
         


                  {header.map((section, i: number) => {
          if (section.links) {
            return  <div class="navbar-item has-dropdown is-hoverable">
            
            
            <a class="navbar-link">
            {section.title}
                      </a>


            <div class="navbar-dropdown">



                          {section.links.map((link, i: number) => {
                    return <a class="dropdown-item">
                      <Link to={link.linkPath}>{link.linkName}</Link>
                    </a>
                  })}
            
              
            </div>
          </div>

            

            // return <div class="dropdown  is-active">
            //   <div class="dropdown-trigger">
            //     <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            //       <span>{section.title}</span>
            //       <span class="icon is-small">
            //         <i class="fas fa-angle-down" aria-hidden="true"></i>
            //       </span>
            //     </button>
            //   </div>
            //   <div class="dropdown-menu" id="dropdown-menu" role="menu">
            //     <div class="dropdown-content">


            //       {section.links.map((link, i: number) => {
            //         return <a class="dropdown-item">
            //           <Link to={link.linkPath}>{link.linkName}</Link>
            //         </a>
            //       })}


            //     </div>
            //   </div>
            // </div>
          }

          return <a class="navbar-item">

            <Link to={section.linkPath}>{section.title}</Link>
          </a>
        })}


          
         
        
        </div>
      </div>
    </div>
  </nav>)

  // return (<nav class="navbar is-fixed-top">
  //   <div class="navbar-brand">
  //     <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
  //       <span></span>
  //       <span></span>
  //       <span></span>
  //     </div>
  //   </div>


  //   <div id="navbarExampleTransparentExample" class="navbar-menu">
  //     <div class="navbar-end">


  //       {header.map((section, i: number) => {
  //         if (section.links) {
  //           return <div class="dropdown  is-active">
  //             <div class="dropdown-trigger">
  //               <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
  //                 <span>{section.title}</span>
  //                 <span class="icon is-small">
  //                   <i class="fas fa-angle-down" aria-hidden="true"></i>
  //                 </span>
  //               </button>
  //             </div>
  //             <div class="dropdown-menu" id="dropdown-menu" role="menu">
  //               <div class="dropdown-content">


  //                 {section.links.map((link, i: number) => {
  //                   return <a class="dropdown-item">
  //                     <Link to={link.linkPath}>{link.linkName}</Link>
  //                   </a>
  //                 })}





  //               </div>
  //             </div>
  //           </div>
  //         }

  //         return <a class="navbar-item" href="#resume">

  //           <Link to={section.linkPath}>{section.title}</Link>
  //         </a>
  //       })}




  //     </div>
  //   </div>



  //   {/* {header.map((section, i: number) => {
  //         if (section.links) {
  //           return <li key={i}>
  //             dropdown
  //                       </li>
  //         }
  //         return <li key={i}>
  //           <Link to={section.linkPath}>{section.title}</Link>
  //         </li>
  //       })} */}
  // </nav>)
}

export default Header

{/* 
  
  <nav class="navbar is-link is-fixed-top">
<div class="navbar-brand">
  <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<div id="navbarExampleTransparentExample" class="navbar-menu">
  <div class="navbar-end">
    <a class="navbar-item" href="#about">
     
      <span>About</span>
    </a>
   
    <a class="navbar-item" href="#resume">
      
      <span>Resume</span>
    </a>
  
  </div>
</div>
</nav> 

*/}