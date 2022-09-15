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
  const [userAuthData, setUserAuthData] = useState({
    token: "",
    userId: ""
  });

  const toggleLogin = (data) => {
    let token = data.token;
    token ? setLogin(true) : setLogin(false);
    {
      token &&
        setUserAuthData((prevData) => {
          return {
            ...prevData,
            token: data.token,
            userId: data.userId
          };
        });
        
    }
  };

  console.log(userAuthData);

  return (
    <LoginContext.Provider value={{login, userAuthData}}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
}
