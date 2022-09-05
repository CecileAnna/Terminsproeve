import BarsIcon from "../subcomponents/icons/BarsIcon";
import Menu from "../components/Menu";
import { useMenu, useMenuUpdate } from "../contexts/MenuContext";

const MenuBtn = (props) => {
  const menu = useMenu();
  const menuUpdate = useMenuUpdate();

  return (
    <>
      <button className={`menu-btn ${props.styles}`} onClick={menuUpdate}>
        {menu ? (
          <Menu />
        ) : (
          <BarsIcon styles={props.barStyles && `bars-white`} />
        )}
      </button>
    </>
  );
};

export default MenuBtn;
