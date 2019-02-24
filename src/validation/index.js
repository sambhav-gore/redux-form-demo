export const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "First name is required";
  }

  if (!values.surname) {
    errors.surname = "Surname is required";
  }

  if (!values.username) {
    errors.username = "Username name is required";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 characters long";
  } else if (values.username.length > 10) {
    errors.username = "Username must be less than 10 characters";
  }

  return errors;
};
