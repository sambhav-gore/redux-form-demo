import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" label="Name" component={customInput} type="text" />
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
