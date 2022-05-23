import "./sign-in-form.styles.scss";

import { useState } from "react";

import {
  signInAuthUserEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInWithEmailAndPassword();
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password or email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
        default:
          alert("Error: ", error);
      }
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithEmailAndPassword = async () => {
    const { user } = await signInAuthUserEmailAndPassword(formFields);
    await createUserDocumentFromAuth(user);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
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

        <div className="button-group-container">
          <Button children="SIGN IN" type="submit" />
          <Button
            children="SIGN IN WITH GOOGLE"
            buttonType="google"
            onClick={signInWithGoogle}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
