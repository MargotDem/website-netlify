/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";
import LoginForm from "./loginForm";

interface IndexPageState {
  displayErrorMessage: boolean;
}

class LoginPage extends Component<{}, IndexPageState> {
  constructor(props: {}) {
    super(props);
    this.state = { displayErrorMessage: false };
    this.displayErrorMessage = this.displayErrorMessage.bind(this);
  }
  displayErrorMessage(displayErrorMessage: boolean) {
    this.setState({ displayErrorMessage });
  }
  render() {
    let { displayErrorMessage } = this.state;
    return (
      <div className="login-page-container">
        <section>
          <div
            className={
              "login-organisation-message " +
              (displayErrorMessage ? "login-organisation-message_show" : "")
            }
          >
            <div className={"column is-7"}>
              <p>
                Le nom de l’organisation que vous avez entré ne correspond pas à
                ceux présents dans nos fichiers. Veuillez vérifier et réessayer.
              </p>
            </div>
          </div>

          <h1 className="is-h4 login-welcome">Bienvenue sur Nua.ge</h1>
          <p className="login-label">Saisissez l’URL de votre organisation.</p>
          <LoginForm displayErrorMessage={this.displayErrorMessage} />
        </section>
      </div>
    );
  }
}

export default LoginPage;
