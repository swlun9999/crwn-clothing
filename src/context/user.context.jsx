import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
import { setCurrentUser } from "../store/user/user.action";

// as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

export const UserProvider = ({ children }) => {

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListner((user) => {
  //     if (user) {
  //         createUserDocumentFromAuth(user);
  //     }

  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);
  
  // return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
