import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";
import {
  required,
  minLength,
  maxLength,
  matchesPassword
} from "../validation/validations";
import "./RegisterForm.css";

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
          validate={[required]}
        />
        <Field
          name="surname"
          label="Surname"
          component={customInput}
          type="text"
          validate={[required]}
        />
        <Field
          name="username"
          label="User Name"
          component={customInput}
          type="text"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          label="Password"
          component={customInput}
          type="password"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="confirmPassword"
          label="Confirm Password"
          component={customInput}
          type="password"
          validate={[required, minLength, maxLength, matchesPassword]}
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
  form: "register"
})(RegisterForm);

export default RegisterForm;
