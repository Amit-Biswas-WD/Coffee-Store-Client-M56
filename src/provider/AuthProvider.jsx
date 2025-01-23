import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const valueInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
  };

  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
