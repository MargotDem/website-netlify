import React from "react";
import LoginFormContainer from "./loginFormContainer";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fetch from "isomorphic-fetch";

const client = new ApolloClient({
  uri: `${process.env.GATSBY_API_BASE_URL}/graphql`,
  fetch
});

export interface LoginFormProps {
  displayErrorMessage: (displayErrorMessage: boolean) => void;
}

const LoginForm = (props: LoginFormProps) => {
  return (
    <ApolloProvider client={client}>
      <LoginFormContainer
        displayErrorMessage={props.displayErrorMessage}
        client={client}
      />
    </ApolloProvider>
  );
};

export default LoginForm;
