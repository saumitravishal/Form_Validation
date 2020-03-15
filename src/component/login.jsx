import React from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import "./login.css";

// Here i am using custom hook to handle the form validation.
const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  // This function will console only when there is no error into our form. You can verify in browser console.
  function submit() {
    console.log("Submitted Succesfully");
  }
  return (
    <div className="container">
      <div className="header">
        <h2>Get started today!</h2>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="inputField">
          <div>
            <h4>First name</h4>
            <div>
              <input
                className={`${errors.firstName && "inputError"}`}
                name="firstName"
                type="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
          </div>
          <h4>Email address</h4>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="inputField">
          <div>
            <h4>Last name</h4>
            <div>
              <input
                className={`${errors.lastName && "inputError"}`}
                name="lastName"
                type="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <h4>Password</h4>
            <div>
              <input
                className={`${errors.password && "inputError"}`}
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
          </div>
        </div>
        <button type="submit">
          Claim Your Free Trial{" "}
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </button>
      </form>
      <p>
        You are agreeing to our <a href="#">Terms and Services</a>
      </p>
    </div>
  );
};

export default LoginForm;
