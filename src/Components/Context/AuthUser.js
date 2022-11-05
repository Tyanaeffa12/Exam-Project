import { createContext, useState, useContext} from "react";

const userAuthContext = createContext({});

export const AuthUser = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <userAuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </userAuthContext.Provider>
  );
};

export default userAuthContext;

export const useAuth = () => {
    return useContext(userAuthContext)
  }
