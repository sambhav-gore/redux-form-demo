export const required = value => (value ? undefined : "Value is required");

export const minLength = value =>
  value.length < 4 ? "Value must be at leasrt 4 characters" : undefined;

export const maxLength = value =>
  value.length > 10 ? "Value is too long" : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : "Passwords must match";

const takenUserNames = ["john", "mark", "alice"];
export const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);
  if (takenUserNames.includes(values.username)) {
    return Promise.reject({
      username: "Username is already taken"
    });
  }
};
