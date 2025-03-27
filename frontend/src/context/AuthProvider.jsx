import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initalUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");
  const [authuser, setAuthUser] = useState(
    initalUserState ? JSON.parse(initalUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authuser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
