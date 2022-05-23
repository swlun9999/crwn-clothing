import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      {/* <FormInput
        label="Email"
        type="email"
        value={email}
        name="email"
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
      /> */}

      <Button children="SIGN IN" onClick={logGoogleUser} />
      <Button
        children="SIGN IN WITH GOOGLE"
        buttonType="google"
        onClick={logGoogleUser}
      />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
