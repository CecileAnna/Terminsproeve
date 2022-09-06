// import { createContext, useState, useContext, useEffect } from "react";
// import { FetchProvider, useFetch, useFetchData } from "./FetchContext";

// const ClassesContext = createContext();
// const ClassesUpdateContext = createContext();

// export function useClasses() {
//   return useContext(ClassesContext);
// }
// export function useClassesUpdate() {
//   return useContext(ClassesUpdateContext);
// }

// export function ClassesProvider({ children }) {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     const url = "http://localhost:4000/api/v1/classes";
//     const classesData = useFetchData(url);
//     return classesData;
//   }, []);

//   const handleClasses = () => {
//     setClasses({
//       classes: classesData,
//     });
//   };

//   return (
//     <FetchProvider>
//       <ClassesContext.Provider value={classes}>
//         <ClassesUpdateContext.Provider value={handleClasses}>
//           {children}
//         </ClassesUpdateContext.Provider>
//       </ClassesContext.Provider>
//     </FetchProvider>
//   );
// }
