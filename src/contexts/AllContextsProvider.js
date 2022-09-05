import { MenuProvider } from "./MenuContext";
import { LoginProvider } from "./LoginContext";

const AllContextsProvider = ({ children }) => {
  return (
    <MenuProvider>
      <LoginProvider>{children}</LoginProvider>
    </MenuProvider>
  );
};

export default AllContextsProvider;
