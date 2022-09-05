import { Link } from "react-router-dom";
import CloseIcon from "../subcomponents/icons/CloseIcon";
import Heading3 from "../subcomponents/texts/Heading3";
import { useLogin } from "../contexts/LoginContext";

const Menu = () => {
  let login = useLogin();
  let loginText = "";
  if (login === true) {
    loginText = "Log Out";
  } else {
    loginText = "Log In";
  }
  return (
    <>
      <div className="menu--wrapper">
        <CloseIcon styles="menu--close-icon" />
        <nav className="menu">
          <ul className="menu--ul">
            <Link to="/Classes" style={{ textDecoration: "none" }}>
              <li className="menu--li">
                <Heading3 text="Home" />
              </li>
            </Link>
            <Link to="/Search" style={{ textDecoration: "none" }}>
              <li className="menu--li">
                <Heading3 text="Search" />
              </li>
            </Link>
            <Link to="/Schedule" style={{ textDecoration: "none" }}>
              <li className="menu--li">
                <Heading3 text="My Schedule" />
              </li>
            </Link>
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <li className="menu--li">
                <Heading3 text={loginText} />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
