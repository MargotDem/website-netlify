import React from "react"
import HomePage from "../components/homePage"

import withMainLayout from "../templates/mainLayout"

const IndexPage = (props) => {
  return (
    <>
      <section class="hero  is-medium is-bold">
            <div class="hero-head">
            
            </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                    The new standard in &lt;insert industry here&gt;
                    </h1>
                    <h2 class="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                </div>
            </div>
        </section>
      
      <HomePage contents={props.contents} />
      
  </>
  )
}

export default withMainLayout(IndexPage)
