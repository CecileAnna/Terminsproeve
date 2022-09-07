import { MenuProvider } from "./MenuContext";
import { LoginProvider } from "./LoginContext";
// import { ClassesProvider } from "./ClassesContext";

const AllContextsProvider = ({ children }) => {
  return (
    <MenuProvider>
      <LoginProvider>
        {/* <ClassesProvider> */}
        {children}
        {/* </ClassesProvider> */}
      </LoginProvider>
    </MenuProvider>
  );
};

export default AllContextsProvider;
