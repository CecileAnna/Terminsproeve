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
  const [login, setLogin] = useState(undefined);

  const toggleLogin = (data) => {
    let token = data.token;
    token ? setLogin(true) : setLogin(false);
  };

  return (
    <LoginContext.Provider value={login}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
}
