import Btn from "../components/Btn";
import WrapperCenterContent from "../components/WrapperCenterContent";
import Heading2 from "../subcomponents/texts/Heading2";
import Heading5 from "../subcomponents/texts/Heading5";
import SubHeading from "../subcomponents/texts/SubHeading";

const Login = () => {
  return (
    <>
      <WrapperCenterContent styles="login">
        <Heading2 text="Believe yourself" />
        <SubHeading
          text="Train like a pro"
          styles="login--subheading black-color-important"
          lineStyles="sub-heading--line-black"
        />

        <form className="login--form">
          <Heading5
            text="Log in with your credentials"
            styles="login--form-heading"
          />

          <input
            placeholder="Enter your email..."
            type="email"
            name=""
            id=""
            className="login--input btn-long"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your email...")}
          />

          <input
            placeholder="Enter your password..."
            type="password"
            name=""
            id=""
            className="login--input btn-long"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Enter your password...")}
          />

          <Btn text="Login" styles="btn-long" />
        </form>
      </WrapperCenterContent>
    </>
  );
};

export default Login;
