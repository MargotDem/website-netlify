/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";

class ContactForm extends Component {
  // handleSubmit(e) {
  //   e.preventDefault();
  //   document.getElementById("sib-form").submit();
  // }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-3-desktop is-4-tablet home-contact">
          <form
            method="POST"
            action="https://439098d6.sibforms.com/serve/MUIEAMSSCvIqsOkExJf54xL8YLPFTaPTpGoUfq0gdzsYdAungLQsYT7tLT7akZxbtXSgPaDwOw8RjpUXxCKJzly1R1UNRxvZBFAspJyFJI89Yd9FwNaN-Oho6kllLvP0VzgtYDoIx7KMTVcNWO6fyhMKF5FB2RXj9cqjzINsKLepsaPCOkwEsQh0mX0MxnaU9r39AS22T_D2F8IV"
            data-type="subscription"
            id="sib-form"
          >
            <input
              className="input home-contact-input"
              type="email"
              placeholder="Entrez votre email"
              id="EMAIL"
              name="EMAIL"
              data-required="true"
              required
              autoComplete="off"
            />
            <button
              form="sib-form"
              type="submit"
              className="button home-contact-button"
              // onClick={this.handleSubmit}
            >
              Demander une invitation
            </button>
            <input type="hidden" name="locale" value="fr" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
