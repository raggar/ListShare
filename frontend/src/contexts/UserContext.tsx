import React, { createContext, useContext } from "react";

export interface UserContextState {
  id: number | null;
  isAuthenticated: boolean;
  logOut: () => void;
  logIn: () => void;
}

const DEFAULT_STATE: UserContextState = {
  id: null,
  isAuthenticated: false,
  logOut: () => {},
  logIn: () => {},
};

const UserContext: React.Context<UserContextState> =
  createContext(DEFAULT_STATE);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const id = null;
  const isAuthenticated = false;

  const logOut = () => {
    console.log("User is logging out...");
  };

  const logIn = () => {
    console.log("User logging in..");
  };

  const userState: UserContextState = {
    id,
    isAuthenticated,
    logIn,
    logOut,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};
