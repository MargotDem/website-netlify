/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";
import { LoginFormProps } from "./index";
import LoginFormView from "./loginFormView";
import gql from "graphql-tag";

const MESSAGES = {
  invalidInput: "Votre saisie n’est pas valide",
  emptyInput: "Vous devez entrer le nom de votre organisation"
};

interface ContactFormState {
  organization: string;
  invalidInputMessage: string;
  isButtonDisabled: boolean;
}

type OwnProps = LoginFormProps & { client: any };

class LoginForm extends Component<OwnProps, ContactFormState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      organization: "",
      invalidInputMessage: "",
      isButtonDisabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeOrganizationRequest() {
    let organizationName = this.state.organization;
    this.props.client
      .query({
        query: gql`
          query getOrganization($slug: String) {
            organization(slug: $slug) {
              name
              slug
              id
            }
          }
        `,
        variables: {
          slug: organizationName
        }
      })
      .then((result: any) => {
        let organizationSlug = result.data.organization.slug;
        window.location.href = `https://${organizationSlug}.nua.ge`;
      })
      .catch((error: any) => {
        this.props.displayErrorMessage(true);
        this.setState({
          isButtonDisabled: false
        });
      });
  }

  handleSubmit() {
    let isInputValid = this.validateInput(this.state.organization);
    if (isInputValid) {
      this.setState({ isButtonDisabled: true });
      this.makeOrganizationRequest();
    }
  }

  validateInput(organization: string) {
    if (organization === "") {
      this.setState({
        invalidInputMessage: MESSAGES.emptyInput
      });
      return false;
    } else if (!organization.match(/^[a-zA-Z0-9-]*$/)) {
      this.setState({ invalidInputMessage: MESSAGES.invalidInput });
      return false;
    }
    return true;
  }

  handleChange(e: any) {
    this.props.displayErrorMessage(false);
    this.setState({
      organization: e.target.value,
      invalidInputMessage: ""
    });
  }

  onKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <LoginFormView
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default LoginForm;
