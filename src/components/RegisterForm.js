import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";
import { validate } from "../validation";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          label="First Name"
          component={customInput}
          type="text"
        />
        <Field
          name="surname"
          label="Surname"
          component={customInput}
          type="text"
        />
        <Field
          name="username"
          label="User Name"
          component={customInput}
          type="text"
        />
        <Field
          name="preference"
          label="Preferred Formatting"
          component={customSelect}
        />

        <Field
          name="newsletter"
          label="Signup to newsletter?"
          component={customInput}
          type="checkbox"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

export default RegisterForm;
