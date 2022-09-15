import { createContext, useState, useContext} from "react";

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

  const toggleLogin = (tokenData) => {
    let token = tokenData.token;
    // setLogin(!login);
    token ? setLogin(true) : setLogin(false);
  };


  

  return (
    <LoginContext.Provider value={login}>
      <LoginUpdateContext.Provider value={{ toggleLogin}}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
}
