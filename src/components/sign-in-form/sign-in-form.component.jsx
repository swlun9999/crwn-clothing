import { useState, useContext } from "react";
import {
  signInAuthUserEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { Container, GroupContainer } from "./sign-in-form.styles.jsx";

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
      await signInAuthUserEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password or email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          alert("Error: ", error.code);
          break;
      }
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <Container>
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

        <GroupContainer>
          <Button children="SIGN IN" type="submit" />
          <Button
            children="SIGN IN WITH GOOGLE"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          />
        </GroupContainer>
      </form>
    </Container>
  );
};

export default SignInForm;
