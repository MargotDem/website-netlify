/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import Global from "./globalHelmet";
import Header from "../components/header";
import Footer from "../components/footer";
import { HeaderOptionsProps } from "../components/header/index";
import { FooterOptionsProps } from "../components/footer/index";

import "../styles/styles.scss";

const withMainLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: { header: HeaderOptionsProps; footer: FooterOptionsProps }
) => {
  return class MainLayout extends React.Component<P> {
    render() {
      return (
        <Global>
          <div className="main-layout">
            <Header
              dontShowLogo={options.header.dontShowLogo}
              showLoginButton={options.header.showLoginButton}
            />
            <div className="main-content">
              <WrappedComponent {...(this.props as P)} />
            </div>
            <Footer showFooter={options.footer.showFooter} />
          </div>
        </Global>
      );
    }
  };
};

export default withMainLayout;
