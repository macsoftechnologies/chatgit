import { useState } from "react";
import { createContext } from "react";

export const SignInContext = createContext({
  isUserSignedIn: false,
});

const SignInContextProvider = ({ children }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const manageSignIn = () => {
    setIsUserSignedIn(true);
  };
  return (
    <SignInContext.Provider value={{ isUserSignedIn, manageSignIn }}>
      {children}
    </SignInContext.Provider>
  );
};

export default SignInContextProvider;
