import { createContext, useState, useContext } from "react";

const LoginContext = createContext();
const LoginUpdateContext = createContext();

export function useLogin() {
  return useContext(LoginContext);
}
export function useLoginUpdate() {
  return useContext(LoginUpdateContext);
}

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(false);

  const handleToggleLogin = () => {
    setLogin(!login);
  };
  return (
    <LoginContext.Provider value={login}>
      <LoginUpdateContext.Provider value={handleToggleLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
}
