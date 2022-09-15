import Btn from "../components/Btn";
import WrapperCenterContent from "../components/WrapperCenterContent";
import Heading2 from "../subcomponents/texts/Heading2";
import Heading5 from "../subcomponents/texts/Heading5";
import SubHeading from "../subcomponents/texts/SubHeading";
import { useState, useEffect } from "react";
import { useLoginUpdate } from "../contexts/LoginContext";

const Login = () => {
  const [userData, setUserData] = useState({
    userMail: "",
    userPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const updateLogin = useLoginUpdate();

  function authLogin(userData) {

      fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${userData.userMail}&password=${userData.userPassword}`,
      })
        .then((response) => response.json())
        .then((data) => {
          updateLogin(data);
        })
        .catch((err) => console.error(err));
   

  }

  function useHandleSubmit(event) {
    event.preventDefault();
    // console.log(userData);
    useEffect(() => { authLogin(userData)}, [userData])
   
  }

  return (
    <>
      <WrapperCenterContent styles="login">
        <Heading2 text="Believe yourself" />
        <SubHeading
          text="Train like a pro"
          styles="login--subheading black-color-important"
          lineStyles="sub-heading--line-black"
        />

        <form className="login--form" onSubmit={useHandleSubmit}>
          <Heading5
            text="Log in with your credentials"
            styles="login--form-heading"
          />

          <input
            onChange={handleChange}
            value={userData.userMail}
            type="email"
            name="userMail"
            id="mail"
            className="login--input btn-long"
            placeholder="Enter your email..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your email...")}
            autoComplete="current-email"
          />

          <input
            onChange={handleChange}
            value={userData.userPassword}
            type="password"
            name="userPassword"
            id="password"
            className="login--input btn-long"
            placeholder="Enter your password..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your password...")}
            autoComplete="current-password"
          />

          <Btn text="Login" styles="btn-long" />
        </form>
      </WrapperCenterContent>
    </>
  );
};

export default Login;
