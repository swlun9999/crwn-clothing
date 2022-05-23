import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters");
          break;
        default:
          alert("Error: ", error);
          break;
      }
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleOnChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleOnChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleOnChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleOnChange}
          required
        />

        <Button children="SIGN UP" type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
