import React from "react";

interface FormProps {
  postSubmitMessage: string;
  invalidEmailMessage: string;
  email: string;
  isButtonDisabled: boolean;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const Form = (props: FormProps) => {
  let {
    postSubmitMessage,
    email,
    handleChange,
    isButtonDisabled,
    handleSubmit,
    invalidEmailMessage,
    onKeyDown
  } = props;
  return (
    <div className="columns is-centered">
      <div className="column home-contact">
        <div
          className={
            "home-contact-form " +
            (postSubmitMessage ? "home-contact-form_hide" : "")
          }
        >
          <form method="POST" action="" data-type="subscription" id="sib-form">
            <input
              className="home-contact-input"
              type="email"
              placeholder="Entrez votre email"
              id="EMAIL"
              name="EMAIL"
              data-required="true"
              required
              autoComplete="off"
              value={email}
              onChange={handleChange}
              onKeyDown={onKeyDown}
            />
            <input type="hidden" name="locale" value="fr" />
            <input
              type="text"
              name="email_address_check"
              value=""
              className="input--hidden"
            />
          </form>

          <button
            disabled={isButtonDisabled}
            className={
              "home-contact-button purple-button " +
              (isButtonDisabled ? " purple-button-disabled" : "")
            }
            onClick={handleSubmit}
          >
            Demander une invitation
          </button>
          <div className="error-message-container">
            <div className="error-message">{invalidEmailMessage}</div>
          </div>
        </div>

        <div
          className={
            "home-contact-message " +
            (postSubmitMessage ? "home-contact-message_show" : "")
          }
        >
          {postSubmitMessage}
        </div>
      </div>
    </div>
  );
};

export default Form;
