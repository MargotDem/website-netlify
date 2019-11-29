import React from "react";
import Global from "./globalHelmet";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/styles.scss";

export default function withMainLayout(WrappedComponent) {
  const Test = props => {
    return (
      <Global>
        <div className="main-layout">
          <Header />
          <div className="main-content">
            <div className="column is-10 is-offset-1">
              <WrappedComponent {...props} />
            </div>
          </div>
          <Footer />
        </div>
      </Global>
    );
  };
  return Test;
}
