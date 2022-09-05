import { createContext, useState, useContext } from "react";

const MenuContext = createContext();
const MenuUpdateContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}
export function useMenuUpdate() {
  return useContext(MenuUpdateContext);
}

export function MenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <MenuContext.Provider value={menuOpen}>
      <MenuUpdateContext.Provider value={handleToggleMenu}>
        {children}
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
}
