import { createContext, useState, useContext, useEffect } from "react";

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

  const toggleLogin = (data) => {
    let token = data.token;
    setLogin(!login);
    // if (token) {
    //   setLogin(!login);
    // }
  };

  useEffect(() => {
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "username=user1&password=1234",
    })
      .then((response) => response.json())
      .then((data) => {
        toggleLogin(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <LoginContext.Provider value={login}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
}
