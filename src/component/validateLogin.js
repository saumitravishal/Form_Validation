export default function validateLogin(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
    errors.firstName = "Must not contain any numbers (0-9)";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
    errors.lastName = "Must not contain any numbers (0-9)";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Must be a valid email ID";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    values.password.length < 8 ||
    !/^[a-zA-Z0-9]+$/.test(values.password)
  ) {
    errors.password =
      "Must be at least 8 characters long. Only numbers (0-9) and letters (A-Z, a-z) are allowed";
  }
  return errors;
}
