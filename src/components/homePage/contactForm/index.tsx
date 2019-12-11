/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";
import Form from "./form";

interface ContactFormState {
  email: string;
  locale: string;
  invalidEmailMessage: string;
  isButtonDisabled: boolean;
  postSubmitMessage: string;
}

const URL =
  "https://439098d6.sibforms.com/serve/MUIEAIYg8gLvNOd96UI6ylsCDSZjHsYt48C5bWgd_A4H0vZWumPs2VfEaOzaFyXajI8Oh0ccrYgquz90EWi9W-8Zi6jbqNuSxpcDt9CRYQgzICuZj-d5_-wEiMdi0l6uyPI-uVbH3OHnQP8p8nxysgMTo_ARRTUTiYdXrrT6EGYteEyWnP4_sjr0xulMf4HksnmfBVhhOmn8RG3N";

const MESSAGES = {
  invalidEmail: "L'adresse n'est pas valide",
  confirmation: "Votre inscription est confirmée",
  emailAddressExists: "Cette adresse e-mail existe déjà",
  error: "Nous n'avons pas pu confirmer votre inscription"
};

class ContactForm extends Component<{}, ContactFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      locale: "fr",
      invalidEmailMessage: "",
      isButtonDisabled: false,
      postSubmitMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", URL + "?isAjax=1");
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      let myForm = document.getElementById("sib-form");
      if (myForm) {
        let formData = new FormData(myForm as HTMLFormElement);
        xhr.send(formData);
      } else {
        reject();
      }
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    let isEmailValid = this.validateEmail(this.state.email);
    if (isEmailValid) {
      this.setState({ isButtonDisabled: true });
      let self = this;
      this.makeRequest()
        .then(function(response) {
          let data = JSON.parse(response as string);
          if (data.message === "emailAddressExists") {
            self.setState({ postSubmitMessage: MESSAGES.emailAddressExists });
          } else if (data.message === "success") {
            self.setState({ postSubmitMessage: MESSAGES.confirmation });
          }
        })
        .catch(function(err) {
          self.setState({ postSubmitMessage: MESSAGES.error });
        });
    } else {
      this.setState({ invalidEmailMessage: MESSAGES.invalidEmail });
    }
  }

  validateEmail(email: string) {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  }

  handleChange(e: any) {
    this.setState({
      email: e.target.value,
      invalidEmailMessage: ""
    });
  }

  onKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  };

  render() {
    return (
      <Form
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default ContactForm;
