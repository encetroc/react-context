import { createContext } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const value = {
    user: {
      firstName: "john",
      lasName: "doe",
      email: "a@a.com",
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
