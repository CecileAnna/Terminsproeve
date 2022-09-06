import { MenuProvider } from "./MenuContext";
import { LoginProvider } from "./LoginContext";
// import { ClassesProvider } from "./ClassesContext";
// import { FetchProvider } from "./FetchContext";

const AllContextsProvider = ({ children }) => {
  return (
    <MenuProvider>
      <LoginProvider>
        {/* <FetchProvider>
          <ClassesProvider> */}
        {children}
        {/* </ClassesProvider>
        </FetchProvider> */}
      </LoginProvider>
    </MenuProvider>
  );
};

export default AllContextsProvider;
