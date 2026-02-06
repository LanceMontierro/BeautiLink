import { useContext, useState, useEffect, createContext } from "react";

import axios from "axios";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const contextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
};

return (
  <GlobalContext.Provider value={{ user, setUser }}>
    {children}
  </GlobalContext.Provider>
);
