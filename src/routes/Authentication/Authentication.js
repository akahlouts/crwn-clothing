// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import // auth,
// // signInWithGoogleRedirect,
// "../../utils/Firebase/Firebase";

import SignupForm from "../../components/SignupForm/SignupForm";
import SigninForm from "../../components/SigninForm/SigninForm";
import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {
  // Redirect Way !!!
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <AuthenticationContainer>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SigninForm />
      <SignupForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
