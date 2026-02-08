import { useContext, useState, useEffect, createContext } from "react";

import { useClerk, useUser } from "@clerk/clerk-expo";
import axios from "axios";
import { router } from "expo-router";
const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const ContextProvider = ({ children }) => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();

      router.replace("/(screens)/logsign");
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <GlobalContext.Provider value={{ user, handleSignOut }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
