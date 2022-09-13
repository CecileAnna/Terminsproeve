import { Link } from "react-router-dom";
import CloseIcon from "../subcomponents/icons/CloseIcon";
import Heading3 from "../subcomponents/texts/Heading3";
import { useLogin, useLoginUpdate } from "../contexts/LoginContext";
import { useMenuUpdate  } from "../contexts/MenuContext";

const Menu = () => {
  let login = useLogin();
  let updateLogin = useLoginUpdate();

  const menuUpdate = useMenuUpdate();

  return (
    <>
      <nav className="menu">
        <CloseIcon styles={`menu--close-icon`} handleClick={menuUpdate}/>
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

          {login && (
            <Link to="/Schedule" style={{ textDecoration: "none" }}>
              <li className="menu--li">
                <Heading3 text="My Schedule" />
              </li>
            </Link>
          )}
          {login && (
            <li className="menu--li" onClick={updateLogin}>
              <Heading3 text="Log Out" />
            </li>
          )}

          {!login && (
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <li className="menu--li">
                <Heading3 text="Log In" onClick={updateLogin} />
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
