import React from "react";

interface LoginFormViewProps {
  organization: string;
  isButtonDisabled: boolean;
  invalidInputMessage: string;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const LoginFormView = (props: LoginFormViewProps) => {
  let {
    organization,
    isButtonDisabled,
    invalidInputMessage,
    handleChange,
    onKeyDown,
    handleSubmit
  } = props;
  return (
    <>
      <div className="login-form-input">
        <input
          type="text"
          name="organization"
          spellCheck={false}
          value={organization}
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
        <span>.nua.ge</span>
      </div>
      <button
        onClick={handleSubmit}
        disabled={isButtonDisabled}
        className={
          "purple-button login-form-button " +
          (isButtonDisabled ? " purple-button-disabled" : "")
        }
      >
        Suivant
      </button>
      <div className="login-error-message-container">
        <div className="login-error-message">{invalidInputMessage}</div>
      </div>
    </>
  );
};

export default LoginFormView;
